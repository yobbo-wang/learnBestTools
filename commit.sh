#!/bin/bash
git add android/*
git add app.json
git add index.js
git add ios/*
git add app/*
git add res/*
git add node_modules/*
git add package.json
git add yarn.lock
git add README.md
git add .babelrc
git add .buckconfig
git add .flowconfig
git add .gitattributes
git add .gitignore
git add .watchmanconfig
git add README.md
git add commit.sh
git commit -m "first commit"
git remote add origin https://github.com/yobbo-wang/learnBestTools.git
git push -u origin master
