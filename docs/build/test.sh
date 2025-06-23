#!/bin/bash

#     brew install ruby
#     gem install jekyll bundler

/opt/homebrew/docs/bin/jekyll -v
bundle install --gemfile /System/Volumes/Data/opt/homebrew/docs/Gemfile
jekyll serve --config _config.yml --source . --destination ./build --port 4000 --watch

exit 



# jkeyll build --config docs/config.yml --source docs/source --destination docs/build
bundle exec jekyll serve --config _config.yml --source . --destination ./build --port 4000 --watch


bundle config set --local path vendor/bundle