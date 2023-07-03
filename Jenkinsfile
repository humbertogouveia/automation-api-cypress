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

    stage('Subir servidor') {
      steps {
        sh 'npx serverest --porta 3500'
      }
    }
    
    stage('Executar Testes') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
}
