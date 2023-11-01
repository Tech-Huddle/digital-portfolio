For frontend get inside `frontend` folder and run below commands
```bash
$ export PROJECT_KEY=dp:frontend

# Generate Token and you that value in PAT
$ export PAT=<Frontend token value>

$ docker run --rm --name=sonar-scanner \
-e SONAR_HOST_URL="${SONARQUBE_URL}" \
-e SONAR_SCANNER_OPTS="-Dsonar.projectKey=${PROJECT_KEY}" \
-e SONAR_TOKEN="${PAT}" \
-v "$(pwd):/usr/src" sonarsource/sonar-scanner-cli
```

For backend get inside `backend` folder and run below commands
```bash
$ export PROJECT_KEY=dp:backend

# Generate Token and you that value in PAT
$ export PAT=sqp_9b8d9161130ad55f90ce80417ff3642b79b6458d

$ docker run --rm --name=sonar-scanner \
-e SONAR_HOST_URL="http://192.168.0.194:9000/" \
-e SONAR_SCANNER_OPTS="-Dsonar.projectKey=${PROJECT_KEY}" \
-e SONAR_TOKEN="${PAT}" \
-v "$(pwd):/usr/src" sonarsource/sonar-scanner-cli
```

Running Sonar server in AWS
```bash
$ export PROJECT_KEY=dp:backend

# Generate Token and you that value in PAT
$ export PAT=sqp_9b8d9161130ad55f90ce80417ff3642b79b6458d

$ docker run --rm --name=sonar-scanner \
-e SONAR_HOST_URL="http://52.221.180.94:9000/" \
-e SONAR_SCANNER_OPTS="-Dsonar.projectKey=${PROJECT_KEY}" \
-e SONAR_TOKEN="sqp_bf65e7d2fe970386832e68db524c2c0b9ff89a3c" \
-v "$(pwd):/usr/src" sonarsource/sonar-scanner-cli
```
