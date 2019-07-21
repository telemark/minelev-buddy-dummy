[![Build Status](https://travis-ci.org/telemark/minelev-buddy-dummy.svg?branch=master)](https://travis-ci.org/telemark/minelev-buddy-dummy)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# minelev-buddy-dummy

A dummy version of the buddy api for MinElev demoes

# API

It supports the same calls as [buddy-minelev-api](https://github.com/telemark/buddy-minelev-api)

# Development

Add a .env file

```
NODE_ENV=development
PAPERTRAIL_HOST=@tfk-papertrail-host
PAPERTRAIL_PORT=@tfk-papertrail-port
```

Start the development server

```
$ now dev
```

# Deploy to ZEIT/Now

Run the deployment script

```
$ npm run deploy
```

# License

[MIT](LICENSE)
