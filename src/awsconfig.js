// src/awsConfig.js
import AWS from "aws-sdk";

AWS.config.update({
  region: "eu-central-1", // e.g., 'us-east-1'
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "eu-central-1:168e4039-3033-4776-a832-20d4348a6998", // e.g., 'us-east-1:xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx'
  }),
});

export const cognitoIdentityServiceProvider =
  new AWS.CognitoIdentityServiceProvider();
