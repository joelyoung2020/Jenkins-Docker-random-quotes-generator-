## Setting up Jenkins, Docker, ECR and EKS cluster using eksctl

# ECR
- Go to AWS console and search for ECR
- Create a repository and note the Url
- Command for building and pushing image to the repository can be found by clicking on View push commands

# Jenkins
- sudo hostname Jenkins ( change hostname to Jenkins )
- Install maven ( or you can also simply configure the maven build tool on jenkins)
- Install Jenkins
- Accessing Jenkins in web browser using http://ip_address:8080
- sudo cat /var/lib/jenkins/secrets/initialAdminPassword  ( to view inital password )
- Install suggested pluggins
- Install pluggins( docker, docker pipeline, Kubernetes CLI )
- Configure maven: give a name and path is /usr/share/maven

# Docker
- Install Docker
- sudo usermod -a -G docker jenkins  ( add jenkins user to docker group )
- sudo service jenkins restart ( reloading jenkins service ) 
- sudo systemctl daemon-reload
- sudo service docker stop 
- sudo service docker start

# EKS cluster using eksctl
There are various ways to create EKS cluster( Terraform, AWS Console, awscli, eksctl), fot this we will be using eksctl. If you choose to use Terraform, go to the Terraform repository on my github to find the yaml file
- Install AWSCLI
- Install eksctl
- Install kubectl
- sudo su - jenkins  ( switch to jenkins user)
- use command "aws configure" and pass the Access key and Secret key of the Iam user of the AWS account you which to create the cluster into. 
- eksctl create cluster --name new-eks-cluster --region us-east-2 --nodegroup-name my-nodes --node-type t3.small --managed --nodes 2 
- eksctl get cluster --name new-eks-cluster --region us-east-2  ( to confirm cluster is up and running )
- aws eks update-kubeconfig --name demo-eks --region us-east-2   ( update kubeconfig file )
- cat /var/lib/jenkins/.kube/config   ( check the kubeconfig file)
