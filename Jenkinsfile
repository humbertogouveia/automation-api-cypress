pipeline {
  agent any
  tools {
    nodejs 'NodeJS'
  }

  stages {
    stage('Clonar o repositório') {
      steps {
        git branch: 'main', url: 'https://github.com/humbertogouveia/automation-api-cypress.git'
      }
    }
    
    stage('Instalar dependências') {
      steps {
        sh 'npm install'
      }
    }

    stage('Subir server e executar Testes') {
      steps {
        sh 'npm run cy:run-ci'
      }
    }
  }
}
