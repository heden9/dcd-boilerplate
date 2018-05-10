#!/bin/sh

. /home/tiger/.nvm/nvm.sh
# nvm install v6.11.0
nvm use v6.11.2

PROJECT_PATH=`pwd`
OUTPUT_PATH="$PROJECT_PATH/output"

node -v
npm -v

npm install --registry https://registry.npm.taobao.org

rm -rf dist/
npm run build

rm -rf $OUTPUT_PATH
mkdir -p $OUTPUT_PATH/motor/inapp/redpacket

cp -rf dist/* $OUTPUT_PATH/motor/inapp/redpacket/
find dist -name '*.html' -exec rm {} \;

