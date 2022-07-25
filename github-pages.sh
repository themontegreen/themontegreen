#!/usr/bin/env sh

# abort on errors
set -e

rm -rf docs
git init
git add -A
git commit -m 'delete previous build'
git push -f git@github.com:oswvld/themontegreen.git master

# build
npm run build

# copy content folder dist
cp -R -f dist docs
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:oswvld/themontegreen.git master
cd -