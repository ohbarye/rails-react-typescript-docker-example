# Rails-React-TypeScript-Docker Example [![CircleCI](https://circleci.com/gh/ohbarye/rails-react-typescript-docker-example/tree/master.svg?style=svg)](https://circleci.com/gh/ohbarye/rails-react-typescript-docker-example/tree/master)

## TL;DR

**Here is an example application with the following modern web technology stacks. With this boilerplate, you can easily start to build your own app.**

- [Ruby](https://www.ruby-lang.org/en/) 2.6.5
- [Rails](https://rubyonrails.org/) 6.0.0
- [React.js](https://reactjs.org/) 16.10.2
- [TypeScript](https://www.typescriptlang.org/) 3.6.3
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [CircleCI](https://circleci.com/)

## Usage

```shell
$ git clone https://github.com/ohbarye/rails-react-typescript-docker-example.git && cd rails-react-typescript-docker-example

# Setup
$ docker-compose run frontend yarn
$ docker-compose run backend rake db:create

# Start
$ docker-compose up -d
$ open http://localhost:3000
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

Bootstrapped with [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript).
