#!/bin/bash

#     brew install ruby
#     gem install jekyll bundler

# jkeyll build --config docs/config.yml --source docs/source --destination docs/build#
jkeyll serve --config _config.yml --source . --destination ./build --port 4000 --watch