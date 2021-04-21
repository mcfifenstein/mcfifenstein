pipeline {
    agent {
        // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0.2 ./build/
        dockerfile {
            filename 'Dockerfile'
            dir 'build'
            label 'fife-app'
            additionalBuildArgs  '--build-arg version=1.0.2'
            args '-v /tmp:/tmp'
        }
    }
}