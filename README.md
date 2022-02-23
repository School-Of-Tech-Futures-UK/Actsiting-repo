# Welcome to Actciting!

Venue hosting system for home owners to list their venues for events 

## How to Run the app 

### Cloning the respository
Click the link below to head to our repo

`https://github.com/School-Of-Tech-Futures-UK/Actsiting-repo`

Run the following command in the terminal to git clone this repo based on its SSH key (copy this)

``` 

$ git clone git@github.com:School-Of-Tech-Futures-UK/Actsiting-repo.git

```
### Setup and start the server

Run the following commands in the terminal 

``` 

$ cd backend
$ npm install
$ node index.js
$ cd ..

$ cd frontend
$ npm install
$ npm run build 
$ cd ..

```
### Allow access on your computer and Deploy
Go to line 45 in infrastructure/lib/infrastructure-stack.js and change the IP address to your public IP address for your computer. Save this file and continue running the following commands in the terminal.

```

$ cd insfrastructure
$ npm install
$ aws-azure-login --profile <profile-type> --mode=gui

```
On this command a log in GUI will become available where you can enter details to your AWS account and following successful login enter the following command to deploy the app.

```
$ cdk --profile <profile-type> deploy
```

Click the link below (or available in the terminal) to launch Actciting.

http://actciting-bucket.s3-website.eu-west-2.amazonaws.com



