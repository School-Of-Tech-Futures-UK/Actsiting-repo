const { Stack, RemovalPolicy, CfnOutput } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
//const { BlockPublicAccess } = require('aws-cdk-lib/aws-s3');
const cdk = require('aws-cdk-lib');
const S3 = require('aws-cdk-lib/aws-s3');
const cloudfront = require('aws-cdk-lib/aws-cloudfront');
const origins = require('aws-cdk-lib/aws-cloudfront-origins'); 
const acm = require('aws-cdk-lib/aws-certificatemanager');
const route53 = require('aws-cdk-lib/aws-route53');
const s3deploy = require('aws-cdk-lib/aws-s3-deployment');
const lambda = require('aws-cdk-lib/aws-lambda');
const apigw = require('aws-cdk-lib/aws-apigateway');
const secrets = require('aws-cdk-lib/aws-secretsmanager');
//const rds = require('aws-cdk-lib/aws-rds');
const ec2 = require('aws-cdk-lib/aws-ec2');

class InfrastructureStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'InsfrastructureQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });

    const myBucket = new S3.Bucket(this, 'FileBucket', {
      bucketName: 'actciting-bucket',
      blockPublicAccess: S3.BlockPublicAccess.BLOCK_ALL,
      encryption: S3.BucketEncryption.S3_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY, 
      autoDeleteObjects: true,
    });
    
    // Database (external)    
    const dbSecret = secrets.Secret.fromSecretPartialArn(this, 'DB Secrets', `arn:aws:secretsmanager:${this.region}:${this.account}:secret:${props.dbSecret}`)

    const dbSecurityGroup = ec2.SecurityGroup.fromLookupById(this, 'DB Security Group', props.dbSecurityGroup);

    // Back End
    const vpc = ec2.Vpc.fromLookup(this, 'VPC', {
      vpcName: 'AcademySharedInfraStack/NjaSharedVpc',
    });

    const lambdaSG = new ec2.SecurityGroup(this, 'Lambda Security Group', { vpc, allowAllOutbound: false });

    lambdaSG.connections.allowTo(dbSecurityGroup, ec2.Port.tcp(5432), 'RDS Instance');

    const apiLambda = new lambda.Function(this, 'API Lambda', {
      functionName: 'ActsitingLambda',
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('../backend'),
      handler: 'index.handler',
      environment: {
        "DB_HOSTNAME": dbSecret.secretValueFromJson('host'),
        "DB_PORT": dbSecret.secretValueFromJson('port'),
        "DB_USER": dbSecret.secretValueFromJson('username'),
        "DB_PASSWORD": dbSecret.secretValueFromJson('password'),
        "DB_NAME": dbSecret.secretValueFromJson('dbname'),
      },
      vpc,
      securityGroups: [lambdaSG],
    });

    // db.grantDataApiAccess(apiLambda);

    const apiGateway = new apigw.LambdaRestApi(this, 'API', {
      handler: apiLambda,
      defaultCorsPreflightOptions: {
        allowOrigins: apigw.Cors.ALL_ORIGINS,
        allowMethods: apigw.Cors.ALL_METHODS,
        allowHeaders: apigw.Cors.DEFAULT_HEADERS
      }
    });


    // Cloudfront Distribution
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'Origin Access Identity', {
      comment: "Created by CDK"
    });

    myBucket.grantRead(originAccessIdentity);

    const cert = acm.Certificate.fromCertificateArn(this, "cert", `arn:aws:acm:us-east-1:${props?.env.account}:certificate/${props?.certId}`);

    const distribution = new cloudfront.Distribution(this, 'Cloudfront', {
      defaultBehavior: {
        origin: new origins.S3Origin(myBucket, { originAccessIdentity }),
        functionAssociations: [{
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          function: new cloudfront.Function(this, 'Cloudfront Redirect Function', {
            code: cloudfront.FunctionCode.fromFile({ filePath: "functions/redirect.js" }),
          }),
        }]
      },
      additionalBehaviors: {
        'api/*': {
          origin: new origins.HttpOrigin(
            `${apiGateway.restApiId}.execute-api.${this.region}.${this.urlSuffix}`,
            {
              originPath: `/${apiGateway.deploymentStage.stageName}`,
            }
          ),
          allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
          cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
        }
      },
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      domainNames: [`${props?.subDomain}.${props?.domainName}`],
      certificate: cert,
    });    


    /*myBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        principals: [new iam.StarPrincipal()],
        actions: ['s3:*'],
        resources: [
          myBucket.bucketArn,
          `${myBucket.bucketArn}/*`
        ],
        conditions: {
          "IpAddress": {
            "aws:SourceIp": ["137.220.86.104","2.27.78.217", "31.14.249.0", "81.155.118.239", "80.235.129.239"]
          }
        }
      })
    )*/
    
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset('../frontend/build')],
      serverSideEncryption: s3deploy.ServerSideEncryption.AES_256,
      destinationBucket: myBucket,
      distribution,
      distributionPaths: ["/*"],
      // destinationKeyPrefix: 'web/static/index.html',
    })

    // Domain Name
    const zone = route53.HostedZone.fromLookup(this, "Hosted Zone", {
      domainName: props?.domainName ?? "",
    });

    new route53.CnameRecord(this, `CNAME`, {
      zone,
      domainName: distribution.domainName,
      recordName: `${props?.subDomain}.${props?.domainName}`,
    });


    
    
    // Outputs
    new cdk.CfnOutput(this, "Frontend URL Output", {
      value: `https://${props?.subDomain}.${props?.domainName}`,
    });

    new CfnOutput(this, 'WebsiteURL', {
      value: myBucket.bucketWebsiteUrl,
    })

  }
}

module.exports = { InfrastructureStack }
