pipeline {
    agent {
        // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0.2 ./build/
        docker {

        }
    }
        stages {
            stage('Example Build') {
                agent { docker 'maven:3.8.1-adoptopenjdk-11' }
                steps {
                    echo 'Hello, Maven'
                    sh 'mvn --version'
                }
            }
            stage('Example Test') {
                agent { docker 'openjdk:8-jre' }
                steps {
                    echo 'Hello, JDK'
                    sh 'java -version'
                }
            }
        }
}