pipeline {
  agent { label 'kubepod' }
  stages {
    stage('Checkout Source') {
      steps {
        git url:'https://github.com/mmoyac/PostVentaCorp.git', branch:'master'
      }
    }
    stage('Deploy App') {
      steps {
        script {
          kubernetesDeploy(configs: "K8s-home-App.yaml", kubeconfigId: "mykubeconfig")
          
        }
      }
    }
 

  }

 

}
