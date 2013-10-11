# grunt-regarde [![Build Status](https://secure.travis-ci.org/yeoman/grunt-regarde.png?branch=master)](http://travis-ci.org/yeoman/grunt-regarde)

> Observe files for changes and run tasks

*Requires grunt 0.4*


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-regarde --save-dev
```

[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


## The regarde task

### Overview

Add a `regarde` section in your `Gruntfile.js` to list the files to observe as well as the task to fire when one of these files change.

### Settings

#### files

Type: `String|Array`

This lists patterns describing files to observe.

#### tasks

Type: `String|Array`

Defines the tasks to run when an observed file change. Note that this is optional (in case it is missing, an implicit `events: true` will be inserted in the configuration)
Tasks called (if they are not spawned), can access to the list of changed file through the array `grunt.regarde.changed`.

#### spawn

Type: `boolean`
Default: false

Whether or not the tasks will be launched in a spawned subprocess. Note that in this case, the spawned task has no information on which file changed.

### Events

`grunt-regarde` will emit an event each time a file is changed, added or deleted.
The following events will be emitted:

- `regarde:file:changed`, `regarde:file:added`, `regarde:file:deleted` with name of the section config, file path, tasks and whether or not the tasks will be spawn, as parameters.

- `regarde:file` with status (`changed`, `added`, `deleted`), name of the section config, file path, tasks and whether or not the tasks will be spawn, as parameters.

- `regarde:<name>:file`, where `<name>` is the name of the task target (i.e. `css` or `js` in the below example), with status (`changed`, `added`, `deleted`), file path, tasks and whether or not the tasks will be spawned, as parameters.

- `regarde:<name>:file:changed`, `regarde:<name>:file:added`, `regarde:<name>:file:deleted` where `<name>` is the name of the task target (i.e. `css` or `js` in the below example), with status (`changed`, `added`, `deleted`), file path, tasks and whether or not the tasks will be spawn, as parameters.


### Examples

```js
grunt.initConfig({
  regarde: {
    js: {
      files: '**/*.js',
      tasks: ['jshint'],
      spawn: true
    },
    css: {
      files: '**/*.scss',
      events: true
    }
  }
});
```

## License

[BSD license](http://opensource.org/licenses/bsd-license.php) and copyright Google
