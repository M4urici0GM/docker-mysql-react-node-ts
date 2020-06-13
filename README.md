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
   -  `yarn prisma:generate` (generates the model types for the typescript intellisense)
   -  `yarn prisma:introspect` (creates the models from the existing database)
   -  `yarn prisma:migrate:save` (generates a migration from the models)
   -  `yarn prisma:migrate:up` (makes changes to the database from migrations)
   -  `yarn prisma:studio` (runs a visual editor for your database)

## :question: How to

-  Get started:
   -  Type `yarn` to install its dependencies.
-  Configure the .env:
   -  Copy the `.env.example` from `packages/api` to `.env`
   -  Copy the `.env.example` from `packages/web` to `.env.development`
   -  Change your variable environments.
-  Start for development:
   -  Type `cd packages/api`
      -  Type `docker-compose -f docker-compose.dev.yml up` to build and run the database and the phpmyadmin.
   -  Type `cd ../..`
      -  Type `yarn start` to start both web and api (or just `yarn web:start` and `yarn api:start`).
   -  Access `localhost:5000` on the browser (web).
   -  Access `localhost` on the browser (phpmyadmin).
      -  Data:
         -  Server: `database`
         -  Username and Password: located on `.env`

## :whale: Using Docker

-  Configuring the .env:
   -  Copy the `.env.example` from `packages/api` to `.env`
      -  Make your changes
   -  Copy the `.env.example` from `packages/web` to `.env.production`
      -  Make your changes
-  Type `docker build -t template/web packages/web`
-  Type `docker build -t template/api packages/api`
-  Type `cd packages/api`
   -  Type `docker-compose up -d` or `docker-compose up --build -d`
-  Type `cd ../web`
   -  Type `docker-compose up -d` or `docker-compose up --build -d`
   -  Access `http://localhost:5000` on the browser.

## :boy: Author

| [<img src="https://avatars3.githubusercontent.com/u/13838273?v=3&s=115"><br><sub>@lucasgdb</sub>](https://github.com/lucasgdb) |
| :----------------------------------------------------------------------------------------------------------------------------: |


## :octocat: Contributors

[//]: contributor-faces

<a href="https://github.com/lucasgdb"><img src="https://avatars3.githubusercontent.com/u/13838273?v=4" title="lucasgdb" width="80" height="80"></a>

[//]: contributor-faces
