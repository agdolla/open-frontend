#! /bin/bash

current_branch=$(git branch | sed -n 's/^\* //p')
current_remote=$(git branch -a | grep remotes/origin/$current_branch)

if [ $current_remote ]; then
  output_js=$(git diff --name-only origin/$current_branch..HEAD | grep -s -e .*\\.[jt]sx\\?$ | grep -v .*\\.snap | sed 's/client\/src/.\/src/g')
else
  output_js=$(git diff --name-only origin..HEAD | grep -s -e .*\\.[jt]sx\\?$  | grep -v .*\\.snap | sed 's/client\/src/.\/src/g')
fi

# Lint
if [[ $output_js ]]; then
yarn lint:js $output_js
fi

if [ $? != 0 ]; then
exit 42
fi
