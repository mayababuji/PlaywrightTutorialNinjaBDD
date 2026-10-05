pipeline {
  agent any

  tools {
    nodejs 'NodeJS-20'
  }

  environment {
    TEST_ENV = 'dev'
    BASE_URL = 'https://tutorialsninja.com/demo/'
    HEADLESS = 'true'
    TEST_TIMEOUT = '30000'
    CI = 'true'
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh '''
          node --version
          npm --version
          npm ci
          npx playwright install chromium
        '''
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

    stage('Add Allure categories') {
      steps {
        sh '''
          if [ -d allure-results ]; then
            cp test-data/categories.json allure-results/categories.json
            echo "Allure categories copied."
          else
            echo "Skipping category copy: allure-results does not exist."
          fi
        '''
      }
    }
  }

  post {
    always {
      script {
        if (fileExists('allure-results')) {
          allure(
            includeProperties: false,
            jdk: '',
            results: [[path: 'allure-results']],
            reportBuildPolicy: 'ALWAYS'
          )
        } else {
          echo 'Skipping Allure report: no allure-results directory was created.'
        }
      }

      archiveArtifacts(
        artifacts: 'playwright-report/**,test-results/**',
        allowEmptyArchive: true
      )
    }
  }
}