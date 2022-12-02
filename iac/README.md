# Uni Nav IAC

This IAC stack includes an S3 bucket and Cloudfront Instance to host the Uni-Nav Js.

## Deploying the Stack

The stack is _NOT_ auto-deployed during the CI/CD process and must be manually deployed by a user with credentials for the environment to which the stack is deploying.

The yaml located at [`./uni-nav.deploy.yml`](./uni-nav.deploy.yml) is the CloudFormation resources configuration and includes all the requirements for creating the stack on AWS.

There is a helper bash script at [`./deploy-stack.sh`](./deploy-stack.sh) that will generate the `aws cloudformation` command for the stage specified.

The script requires a `stage` argument that will be added as a suffix to the Stack and dependent service names.

There is also a helper package script called `deploy-stack` to make it even easier.

```
% yarn deploy-stack myStage

Template: uni-nav.deploy.yml
Stage: myStage
Stack name: Universal-Navigation-myStage
Domain: topcoder-dev.com
Deploy (i.e. create or update) the stack w/the params
```

<b>There are also a couple checks in the script that you can silence by adding a 2nd argument of `Y`.</b>

```
% yarn deploy-stack myStage Y
```

### Deploying the Stack with local envioronment variables

Here are the environment variables that must be set in order to create the stack:

```
# The domain at which the JS will be hosted. The deploy-stack script will
# create a Route 53 record for this domain
DOMAIN=topcoder-dev.com

```
