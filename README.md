# :rocket: Template for ReactJS and NodeJS using Docker and MySQL with Typescript :blue_heart:

## :exclamation: Requirements

-  Docker (if you do not have the database installed)
-  MySQL (if you do not have docker installed)
-  Node
-  Yarn

## :hotsprings: Commands (helper)

-  Follow the `How to` steps and then follow the steps below
-  `cd packages/api`
   -  `yarn prisma init` (to set up a new prisma project, _not needed in this project_)
   -  `yarn prisma generate` (generates the model types for the typescript intellisense)
   -  `yarn prisma introspect` (creates the models from the existing database)
   -  `yarn prisma migrate save --experimental` (generates a migration from the models)
   -  `yarn prisma migrate up --experimental` (makes changes to the database from migrations)
   -  `yarn prisma studio --experimental` (runs a visual editor for your database)

## :question: How to

-  Get started:
   -  Type `yarn` to install its dependencies.
-  Configure the .env:
   -  Copy the `.env.example` from root to `.env`
   -  Copy the `.env.example` from `packages/api` to `.env.development`
   -  Copy the `.env.example` from `packages/api/prisma` to `.env`
   -  Copy the `.env.example` from `packages/web` to `.env.development`
   -  Change your variable environments.
-  Start for development:
   -  Type `docker-compose -f docker-compose.dev.yml up` to build and run the database.
   -  Type `yarn start` to start both web and api (or just `yarn web:start` and `yarn api:start`).
   -  Access `http://localhost:3000` on the browser.
-  Use product build:
   -  Type `docker-compose -f docker-compose.dev.yml up` to build and run both database and phpmyadmin.
   -  Type `yarn build` to build the packages.
   -  Type `yarn api:production` to start the production build of api.
   -  Type `yarn web:production` to start the production build of web.
   -  Access `http://localhost:5000` on the browser (web).
   -  Access `http://localhost` on the browser (phpmyadmin).
      -  Data:
         -  Server: `database`
         -  Username and Password: located on `.env`

## :whale: Using Docker

-  Configuring the .env:
   -  Copy the `.env.example` from `packages/api` to `.env.production`
      -  Replace the `localhost` from `MONGO_URL` to `database` (or the service name)
   -  Copy the `.env.example` from `packages/web` to `.env.production`
   -  Make your changes
-  Type `docker build -t template/web packages/web` (optional)
-  Type `docker build -t template/api packages/api` (optional)
-  Type `docker-compose up` or `docker-compose up --build`
-  Access `http://localhost:5000` on the browser.

## :cloud: Hosting (AWS EC2)

-  Create a new EC2 instance on AWS Console Management
   -  Get the `aws_deploy.pem` file and move it here.
   -  Get the public DNS from AWS of your new instance (OS@DNS), for example: `ubuntu@ec2-18-228-24-132.sa-east-1.compute.amazonaws.com`
-  Configure the .env:
   -  Copy the `.env.example` from `packages/api` to `.env.production`
   -  Copy the `.env.example` from `packages/web` to `.env.production`
   -  Change the environment variables.
-  Type `ssh -i "aws_deploy.pem" OS@AWS_DNS`
-  Type `mkdir app`
-  Type `ctrl + D`
-  Type `rsync -avr -e "ssh -l user -i aws_deploy.pem" --exclude '**/*/node_modules' --exclude '**/*/dist' --exclude '**/*/build' packages docker-compose.yml OS@AWS_DNS:/home/OS/app`
-  Type `ssh -i "aws_deploy.pem" OS@AWS_DNS`
-  Type `cd app`
-  Type `docker-compose down` to down and stop the running application (if it exists).
-  Type `docker-compose up --build -d` to up and run the application.
-  Access `IP:5000` or `DNS:5000` in the browser.

## :boy: Author

| [<img src="https://avatars3.githubusercontent.com/u/13838273?v=3&s=115"><br><sub>@lucasgdb</sub>](https://github.com/lucasgdb) |
| :----------------------------------------------------------------------------------------------------------------------------: |


## :octocat: Contributors

[//]: contributor-faces

<a href="https://github.com/lucasgdb"><img src="https://avatars3.githubusercontent.com/u/13838273?v=4" title="lucasgdb" width="80" height="80"></a>

[//]: contributor-faces
