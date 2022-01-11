#!/bin/zsh

# abort on errors
#set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
gitpro push -f git@github.com:gabuscuv/gabuscuv.github.io.git main

#cd -
