const { Stack, Duration, RemovalPolicy, CfnOutput } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
const { BlockPublicAccess } = require('aws-cdk-lib/aws-s3');
const  S3  = require('aws-cdk-lib/aws-s3');
const iam = require('aws-cdk-lib/aws-iam');
const s3deploy = require('aws-cdk-lib/aws-s3-deployment');

class InsfrastructureStack extends Stack {
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
      encryption: S3.BucketEncryption.KMS_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY, 
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html'
    });

    myBucket.addToResourcePolicy(
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
    )
    
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset('..\\frontend\\build')],
      serverSideEncryption: s3deploy.ServerSideEncryption.AES_256,
      destinationBucket: myBucket,
      // destinationKeyPrefix: 'web/static/index.html',
    })

    new CfnOutput(this, 'WebsiteURL', {
      value: myBucket.bucketWebsiteUrl,
    })

  }
}

module.exports = { InsfrastructureStack }
