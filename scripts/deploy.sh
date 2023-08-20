#!/usr/bin/env sh

if [ $(git branch --show-current) != 'main' ]
then
    echo "You need to be in the main branch to deploy"
    exit 1
fi

# abort on errors
set -e

# Sourcing nvm
. ~/.nvm/nvm.sh

# build
nvm install 16.20.2
npm run build

# navigate into the build output directory
cd dist

git init
git add --all
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
git push -f git@github.com:EdBarrancos/gamedev-portfolio.git master:gh-pages

cd -
