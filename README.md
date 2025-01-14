# Exercise: Create a Lambda Function with CDK and GitHub Actions
This is a simple exercise to create a Lambda function using AWS CDK and GitHub Actions. Follow the steps below to create a GitHub Actions workflow that will deploy a Lambda function using the code in this repository.

### Step 1: Create the workflowe file
Create a new file in the `.github/workflows` directory called `deploy.yml` and add the following code:

```yaml
name: Deploy Lambda Function

on:
  push:
    branches: 
      - '**'
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Print hello world
        run: echo "Hello, world!"

```
Commit and push the changes to the repository. Check that the workflow runs successfully in the Actions tab of the repository. The `workflow_dispatch` event allows you to manually trigger the workflow from the Actions tab. Try to run the workflow manually and check that it runs successfully.

### Step 2: Configure node.js
Use the [action/setup-node](https://github.com/actions/setup-node) action to configure Node.js version 22 in the run environment. Add a step with the "uses:" keyword to reference the action. See action's documentation for usage details.

### Step 3: Install dependencies
Add a step that runs `npm ci` using the "run:" keyword.

### Step 4: Install CDK
Add a step that runs `npm install -g aws-cdk` using the "run:" keyword.

### Step 5: Configure AWS credentials
Add the following step to the job:

```yaml
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@master
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_KEY }}
    aws-region: "us-east-1"
```

Go to repository settings => Secrets and variables => Actions => New repository secret and add AWS access and secret keys using the names `AWS_ACCESS_KEY` and `AWS_SECRET_KEY`.

### Step 6: Deploy the Lambda function
- Add a step that runs `cdk deploy` using the "run:" keyword
- Commit and push, browse to the Actions tab and check that the workflow runs successfully
- Go to the logs and check that the Lambda function was deployed
- Browse to the URL of the Lambda function found in the logs and see that it's working.
