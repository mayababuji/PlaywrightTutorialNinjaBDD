pipeline {
  agent any

  environment {
    TEST_ENV = 'dev'
    BASE_URL = 'https://tutorialsninja.com/demo/'
    HEADLESS = 'true'
    TEST_TIMEOUT = '30000'
    CI = 'true'
  }
  tools {
  nodejs 'NodeJS-20'
}

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
        sh 'npx playwright install --with-deps chromium'
      }
    }

    stage('Run BDD tests') {
      steps {
        withCredentials([
          string(
            credentialsId: 'tutorial-ninja-password',
            variable: 'TEST_PASSWORD'
          )
        ]) {
          sh '''
            npx bddgen
            npx playwright test
          '''
        }
      }
    }
  }

  post {
    always {
      allure results: [[path: 'allure-results']]

      archiveArtifacts(
        artifacts: 'playwright-report/**,test-results/**',
        allowEmptyArchive: true
      )
    }
  }
}