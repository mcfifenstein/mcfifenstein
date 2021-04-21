pipeline {
    agent {
        docker {
            image 'mcfifenstein'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t . mcfifenstein'
                sh 'npm install'
            }
        }
    }
}