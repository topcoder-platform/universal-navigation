#!/bin/bash

# load in the environment variables
set -a
. .env
set +a

# validate the environment variables
if [[ -z $DOMAIN ]]
    then
        echo "DOMAIN is required"
        exit 1
fi

# get the stage
stage=$1
if [[ -z $stage ]]
    then
        echo "Enter name of stage:"
        read STAGE
        stage=$STAGE
fi

# if we didn't get a stage, we can't deploy
if [[ -z $stage ]]
    then
        echo "Stage is required. Cancelling deployment."
        exit 2
fi

# get the stack and queue names
stackName=Universal-Navigation-$stage
template=uni-nav.deploy.yml
echo "Template: $template"
echo "Stage: $stage"
echo "Stack name: $stackName"
echo "Domain: $DOMAIN"
echo "AWS Profile: $AWS_PROFILE"

# approve the deployment
silent=$2
if [[ -z $silent ]]
    then
        echo "Are you sure you want to deploy? Y/n"
        read SILENT
        silent=$SILENT
fi

if [[ $silent != "Y" ]]
    then
        echo "Deployment cancelled"
        exit 3
fi

echo "Deploy (i.e. create or update) the stack w/the params"

aws cloudformation deploy \
    --stack-name $stackName \
    --template-file $template \
    --profile $AWS_PROFILE \
    --parameter-overrides \
        Stage=$stage \
        Domain=$DOMAIN
