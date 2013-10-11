# grunt-express-server [![Build Status](https://travis-ci.org/ericclemmons/grunt-express-server.png?branch=master)](https://travis-ci.org/ericclemmons/grunt-express-server)

> Simple grunt task for running an Express server that works great with LiveReload + Watch/Regarde

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-express-server --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-express-server');
```

## The `express` task

### Setup

In your project's Gruntfile, you can create one or multiple servers:

```js
grunt.initConfig({
  express: {
    options: {
      // Override defaults here
    },
    dev: {
      options: {
        script: 'path/to/dev/server.js'
      }
    },
    prod: {
      options: {
        script: 'path/to/prod/server.js'
      }
    }
    test: {
      options: {
        script: 'path/to/test/server.js'
      }
    }
  }
});
```

You can override the default `options` either in the root of the `express` config
or within each individual server task.

### Default `options`

```js
  express: {
    options: {
      // Will turn into: `node path/to/server.js ARG1 ARG2 ... ARGN`
      args: [ ],

      // Setting to `false` will effectively just run `node path/to/server.js`
      background: true,

      // Called if spawning the server fails
      error: function(err, result, code) {},

      // Called when the spawned server throws errors
      fallback: function() {},

      // Override node env's PORT
      port: 3000
    }
  }
```

### Usage

#### Starting the server

If you have a server defined named `dev`, you can start the server by running `expess:dev`.


#### Stopping the server

Similarly, if you start the `dev` server with `express:dev`, you can stop the server
with `express:dev:stop`.

#### With [grunt-contrib-livereload](https://github.com/gruntjs/grunt-contrib-livereload)

```js
grunt.initConfig({
  watch: {
    express: {
      files:  [ 'path/to/files/to/watch/**.js' ],
      tasks:  [ 'express:dev', 'livereload' ]
    }
  }
});

grunt.registerTask('server', [ 'express:dev', 'livereload', 'watch' ])
```

This will let you override `grunt server` with a LiveReload-able Express Server.
Finally, you can make changes to your API and watch the JSON change in your browser!

#### With [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

```js
grunt.initConfig({
  watch: {
    express: {
      files:  [ '**/*.js' ],
      tasks:  [ 'express:dev' ],
      options: {
        nospawn: true //Without this option specified express won't be reloaded
      }
    }
  }
});

grunt.registerTask('server', [ 'express:dev', 'watch' ])
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

### v0.3.1

- Try to force notification that `express` task has finished as much as possible

### v0.3.0

- `express` is now a multitask with customizable options, better error handling and `:stop` task

### v0.2.0

- Change `express-server` task to `express`
- Config is set via `express: '...'` instead of `server: { script: '...' } `

### v0.1.0

- Initial import from [Genesis Skeleton](https://github.com/ericclemmons/genesis-skeleton) & release
