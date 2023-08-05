
```
docker run --rm --name=sonar-scanner \
-e SONAR_HOST_URL="http://192.168.0.194:9000/" \
-e SONAR_SCANNER_OPTS="-Dsonar.projectKey=${YOUR_PROJECT_KEY}" \
-e SONAR_TOKEN="sqa_d8283201304a379f415ad764c6dccad5b3c11726" \
-v "$(pwd):/usr/src" sonarsource/sonar-scanner-cli
```
