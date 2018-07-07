# Rails-React-TypeScript-Docker Example

This is an example application with the following modern web technology stacks. With this boilerplate, you can easily start to build your own app.

- [Ruby](https://www.ruby-lang.org/en/) 2.5.1
- [Rails](https://rubyonrails.org/) 5.2.0
- [React.js](https://reactjs.org/) 16.4.1
- [TypeScript](https://www.typescriptlang.org/) 2.9.2
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Usage

```shell
$ git clone https://github.com/ohbarye/rails-react-typescript-docker-example.git && cd rails-react-typescript-docker-example
$ docker-compose run backend rake db:create
$ docker-compose up -d
$ open http://localhost:3000
```

## Further Details

### Backend

The combination, Rails + PostgreSQL + Docker Compose, is just a result I followed [Docker Compose's official instruction](https://docs.docker.com/compose/rails/).

See further details:

### Frontend

Bootstrapped with [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript).
