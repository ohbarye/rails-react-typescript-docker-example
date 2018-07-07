FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir -p /myapp/web
WORKDIR /myapp/web
COPY Gemfile /myapp/web/Gemfile
COPY Gemfile.lock /myapp/web/Gemfile.lock
RUN bundle install
COPY . /myapp/web
