module.exports = (grunt)->

  # Run `grunt server` for live-reloading development environment
  grunt.registerTask('server', [ 'build', 'livereload-start', 'karma:background', 'express', 'regarde' ])

  # Run `grunt test` (used by `npm test`) for continuous integration (e.g. Travis)
  grunt.registerTask('test', [ 'build', 'karma:unit' ])

  # Run `grunt test:browsers` for real-world browser testing
  grunt.registerTask('test:browsers', [ 'karma:browsers', 'server' ])

  # Clean, validate & compile web-accessible resources
  grunt.registerTask('build', [ 'clean', 'copy', 'compass:prod' ])

  # Optimize pre-built, web-accessible resources for production, primarily `usemin`
  grunt.registerTask('optimize', [ 'useminPrepare', 'concat', 'uglify', 'compass:prod', 'mincss', 'rev', 'usemin' ])


  # Configuration
  grunt.config.init

    # Directory CONSTANTS (see what I did there?)
    BUILD_DIR:      'build/'
    CLIENT_DIR:     'client/'
    COMPONENTS_DIR: 'components/'
    SERVER_DIR:     'server/'

    # Glob CONSTANTS
    ALL_FILES:      '**/*'
    CSS_FILES:      '**/*.css'
    HTML_FILES:     '**/*.html'
    IMG_FILES:      '**/*.{png,gif,jpg,jpeg}'
    JS_FILES:       '**/*.js'
    SASS_FILES:     '**/*.scss'
    LESS_FILES:     '**/*.less'


    # Wipe the `build` directory
    clean:
      build:        '<%= BUILD_DIR %>'

    copy:
      # App images from Bower `components` & `client`
      images:
        files:      [
          expand:   true,
          cwd:      '<%= COMPONENTS_DIR %>/bootstrap/img'
          src:      '<%= IMG_FILES %>'
          dest:     '<%= BUILD_DIR %>/img'
        ,
          expand:   true
          cwd:      '<%= CLIENT_DIR %>'
          src:      '<%= IMG_FILES %>'
          dest:     '<%= BUILD_DIR %>'
        ]

      # Copy `client` -> `build`, as resources are served from `build`
      client:
        files:      [
          expand:   true
          cwd:      '<%= CLIENT_DIR %>'
          src:      '<%= ALL_FILES %>'
          dest:     '<%= BUILD_DIR %>'
        ]

      # Make components HTTP-accessible
      components:
        files:
          '<%= BUILD_DIR %>': '<%= COMPONENTS_DIR + ALL_FILES %>'

      # app (non-Bower) JS in `client`
      js:
        files:      [
          expand:   true
          cwd:      '<%= CLIENT_DIR %>'
          src:      '<%= JS_FILES %>'
          dest:     '<%= BUILD_DIR %>'
        ]

      # app (non-Bower) HTML in `client`
      templates:
        files:      [
          expand:   true
          cwd:      '<%= CLIENT_DIR %>'
          src:      '<%= HTML_FILES %>'
          dest:     '<%= BUILD_DIR %>'
        ]

    # Validate app `client` and `server` JS
    jshint:
      # files:        [ '<%= SERVER_DIR + JS_FILES %>'
      #                 '<%= CLIENT_DIR + JS_FILES %>' ]
      files:        []
      options:
        es5:        true
        laxcomma:   true  # Common in Express-derived libraries

    # Browser-based testing
    karma:
      options:
        configFile: 'karma.conf.js'

      # Used for running tests while the server is running
      background:
        background: true
        singleRun:  false

      # Used for testing site across several browser profiles
      browsers:
        browsers:   [ 'PhantomJS' ] # 'Chrome', 'ChromeCanary', 'Firefox', 'Opera', 'Safari', 'IE', 'bin/browsers.sh'
        background: true
        singleRun:  false

      # Used for one-time validation (e.g. `grunt test`, `npm test`)
      unit:
        singleRun:  true

    compass:
      prod:
        # http://compass-style.org/help/tutorials/configuration-reference/#configuration-properties
        options:
          sassDir: '<%= CLIENT_DIR %>/app/styles',
          cssDir: '<%= BUILD_DIR %>/app/styles'

    # Compile `app.less` -> `app.css`
    # less:
    #   '<%= BUILD_DIR %>/app/styles/app.css': '<%= CLIENT_DIR %>/app/styles/app.less'

    # Support live-reloading of all non-Bower resources
    livereload:
      options:
        base:       '<%= BUILD_DIR %>'
      files:        '<%= BUILD_DIR + ALL_FILES %>'

    # Minify app `.css` resources -> `.min.css`
    mincss:
      app:
        expand:     true
        cwd:        '<%= BUILD_DIR %>'
        src:        '<%= BUILD_DIR %>/app/styles/*.css'
        dest:       '<%= BUILD_DIR %>'
        ext:        '.min.css'


    # Ability to run `jshint` without errors terminating the development server
    parallel:
      less:         [ grunt: true, args: [ 'less' ] ]
      compass:         [ grunt: true, args: [ 'compass' ] ]
      jshint:       [ grunt: true, args: [ 'jshint' ] ]

    # "watch" distinct types of files and re-prepare accordingly
    regarde:
      # Any public-facing changes should reload the browser & re-run tests (which may depend on those resources)
      build:
        files:      '<%= BUILD_DIR + ALL_FILES %>'
        tasks:      [ 'livereload', 'karma:background:run' ]

      # Changes to app code should be validated and re-copied to the `build`, triggering `regarde:build`
      js:
        files:      '<%= CLIENT_DIR + JS_FILES %>'
        tasks:      [ 'copy:js', 'parallel:jshint' ]

      # Changes to app styles should re-compile, triggering `regarde:build`
      less:
        files:      '<%= CLIENT_DIR + LESS_FILES %>'
        tasks:      [ 'parallel:less' ]

      compass:
        files:      '<%= CLIENT_DIR + SASS_FILES %>'
        tasks:      [ 'parallel:compass' ]

      # Changes to server-side code should validate, restart the server, & refresh the browser
      server:
        files:      '<%= SERVER_DIR + ALL_FILES %>'
        tasks:      [ 'parallel:jshint', 'express', 'livereload' ]

      # Changes to app templates should re-copy & re-compile them, triggering `regarde:build`
      templates:
        files:      '<%= CLIENT_DIR + HTML_FILES %>'
        tasks:      [ 'copy:templates' ]

    # Express requires `server.script` to reload from changes
    express:
      server:
        options:
          script:   '<%= SERVER_DIR %>/server.js'

    # Prepend a hash on file names for versioning
    rev:
      files:
        src:  ['<%= BUILD_DIR %>/app/scripts/all.min.js','<%= BUILD_DIR %>/app/styles/app.min.css']

    # Output for optimized app index
    usemin:
      html:         '<%= BUILD_DIR %>/index.html'

    # Input for optimized app index
    useminPrepare:
      html:         '<%= BUILD_DIR %>/index.html'


  # Dependencies
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-contrib-livereload')
  grunt.loadNpmTasks('grunt-contrib-mincss')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-express-server')
  grunt.loadNpmTasks('grunt-karma')
  grunt.loadNpmTasks('grunt-regarde')
  grunt.loadNpmTasks('grunt-parallel')
  grunt.loadNpmTasks('grunt-usemin')
  grunt.loadNpmTasks('grunt-rev')
