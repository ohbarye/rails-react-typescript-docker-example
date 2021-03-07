# Rails-React-TypeScript-Docker Example ![backend_test](https://github.com/ohbarye/rails-react-typescript-docker-example/actions/workflows/backend_test.yml/badge.svg) ![frontend_test](https://github.com/ohbarye/rails-react-typescript-docker-example/actions/workflows/frontend_test.yml/badge.svg)

## TL;DR

**Here is an example application with the following modern web technology stacks. With this boilerplate, you can easily start to build your own app.**

- [Ruby](https://www.ruby-lang.org/en/) 3.0.0
- [Rails](https://rubyonrails.org/) 6.1.3
- [React.js](https://reactjs.org/) 17.0.1
- [TypeScript](https://www.typescriptlang.org/) 4.2.3
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) 11
- [GitHub Actions](https://github.com/features/actions)

## Usage

```shell
$ git clone https://github.com/ohbarye/rails-react-typescript-docker-example.git && cd rails-react-typescript-docker-example

# Setup
$ docker-compose run frontend yarn
$ docker-compose run backend bin/rails db:create db:migrate

# Start
$ docker-compose up -d

# Open frontend
$ open http://localhost:80 # You'll see yaichi page, then click any app

# Check backend API
$ curl -H 'Host: backend.localhost' http://localhost/greetings/hello
```

## Motivation

Nowadays, I feel like **we need a wide range acknowledgment on web development even if we call ourselves "backend developer" or "frontend developer".**

As for my experience, I've been a Rails engineer, I'm but recently working like kinda frontend developer because I spend all of my working time for building an SPA (single page application) built with React + TypeScript.

The SPA, Of course, has a backend API, Ruby on Rails connecting PostgreSQL in my case. I use Docker Compose for defining and running multi-container Docker applications because it's not much simple to bootstrap all of applications and middlewares.

**Learning each technology itself is not a burden. I rather like learning. But I've thought I'd like to pursue my playground whose tech stacks are virtually same as ones I develop in work.**

## Further Details

### Backend

The combination, Rails + PostgreSQL + Docker Compose, is just a result I followed [Docker Compose's official instruction](https://docs.docker.com/compose/rails/).

### Frontend

It consist of very thin webpack settings, TypeScript config, and Jest.
