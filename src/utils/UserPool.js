import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "eu-central-1_5dcLphQQE",
  ClientId: "441jg1tdufjhorc8304tfhha1a",
};

export default new CognitoUserPool(poolData);
