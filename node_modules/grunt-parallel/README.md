# grunt-parallel

Run commands and tasks in parallel.

## Getting Started
Install this grunt plugin next to your project's [Gruntfile.js gruntfile][getting_started] with: `npm install grunt-parallel --save-dev`

Then add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-parallel');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation

### Settings

* <tt>commands</tt> - An array of commands to run, each deferred to: http://gruntjs.com/api/grunt.util#grunt.util.spawn

```javascript
grunt.initConfig({
  parallel: {
    assets: [{
      grunt: true,
      args: ['requirejs']
    }, {
      grunt: true,
      args: ['compass']
    },{
      command: 'some-custom-shell-script.sh'
    }]
  }
});
```

One might target the task using `grunt parallel:assets`. This would run compass, requirejs, and a custom shell script at the same time, each logging to your console when they are done.

## License
Copyright (c) 2013 Merrick Christensen
Licensed under the MIT license.
