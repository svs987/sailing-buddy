#!/bin/zsh
rm ./app.config.js
cp ./app.config.test.js ./app.config.js
expo publish --release-channel test
rm ./app.config.js
cp ./app.config.dev.js ./app.config.js

