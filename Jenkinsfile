pipeline {
  agent any

  environment {
    BASE_URL = 'https://tutorialsninja.com/demo/'
    HEADLESS = 'true'
    TEST_TIMEOUT = '30000'
  }

  stages {
    stage('Run tests') {
      steps {
        withCredentials([
          string(
            credentialsId: 'tutorial-ninja-password',
            variable: 'TEST_PASSWORD'
          )
        ]) {
          sh '''
            TEST_ENV=dev npx bddgen
            TEST_ENV=dev npx playwright test
          '''
        }
      }
    }
  }

  post {
    always {
      allure results: [[path: 'allure-results']]
    }
  }
}