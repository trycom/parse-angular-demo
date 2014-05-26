module.exports = (grunt)->

  # Run `grunt server` for live-reloading development environment
  grunt.registerTask('server', [ 'build', 'karma:background', 'express', 'watch' ])

  # Run `grunt test` (used by `npm test`) for continuous integration (e.g. Travis)
  grunt.registerTask('test', [ 'build', 'karma:unit' ])

  # Run `grunt test:browsers` for real-world browser testing
  grunt.registerTask('test:browsers', [ 'karma:browsers', 'server' ])

  # Clean, validate & compile web-accessible resources
  grunt.registerTask('build', [ 'clean', 'copy', 'ngtemplates', 'compass:prod' ])

  # Optimize pre-built, web-accessible resources for production, primarily `usemin`
  grunt.registerTask('optimize', [ 'useminPrepare', 'concat', 'ngmin', 'replace:dist', 'uglify', 'compass:prod', 'mincss', 'rev', 'usemin' ])

  grunt.registerTask('prod', ['build', 'optimize']);


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
    HTML_FILES:     '{app/scripts/modules/directives,app/views}/**/*.html'
    IMG_FILES:      '**/*.{png,gif,jpg,jpeg}'
    JS_FILES:       '**/*.js'
    SASS_FILES:     '**/*.scss'


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
      # templates:
      #   files:      [
      #     expand:   true
      #     cwd:      '<%= CLIENT_DIR %>'
      #     src:      '<%= HTML_FILES %>'
      #     dest:     '<%= BUILD_DIR %>'
      #   ]

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

    # Minify app `.css` resources -> `.min.css`
    mincss:
      app:
        expand:     true
        cwd:        '<%= BUILD_DIR %>'
        src:        '<%= BUILD_DIR %>/app/styles/*.css'
        dest:       '<%= BUILD_DIR %>'
        ext:        '.min.css'


    ngmin:
      files:
        src:  '<%= BUILD_DIR %>/app/scripts/all.min.js'
        dest: '<%= BUILD_DIR %>/app/scripts/all.min.js'
          
    # Ability to run `jshint` without errors terminating the development server
    parallel:
      compass:         [ grunt: true, args: [ 'compass' ] ]
      jshint:       [ grunt: true, args: [ 'jshint' ] ]

    # "watch" distinct types of files and re-prepare accordingly
    watch:
      # Any public-facing changes should reload the browser & re-run tests (which may depend on those resources)
      build:
        files:      '<%= BUILD_DIR + ALL_FILES %>'
        tasks:      [ 'karma:background:run' ]

      # Changes to app code should be validated and re-copied to the `build`, triggering `regarde:build`
      js:
        files:      '<%= CLIENT_DIR + JS_FILES %>'
        tasks:      [ 'copy:js', 'parallel:jshint' ]

      compass:
        files:      '<%= CLIENT_DIR + SASS_FILES %>'
        tasks:      [ 'compass' ]

      # Changes to server-side code should validate, restart the server, & refresh the browser
      server:
        files:      '<%= SERVER_DIR + ALL_FILES %>'
        tasks:      [ 'parallel:jshint', 'express' ]

      # Changes to app templates should re-run ngtemplates
      templates:
        files:      '<%= CLIENT_DIR + HTML_FILES %>'
        tasks:      [ 'ngtemplates' ]

      # Custom watch options 
      options:
        spawn: false
        livereload: true

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

    # Convert Angular `.html` templates to `.js` in the `app` module
    ngtemplates:
      app: # Replace this by your angular module name (here it is defined in app/scripts/app.js)
        src:        '<%= HTML_FILES %>'
        dest:       '<%= BUILD_DIR %>app/scripts/app.templates.js'
        cwd:      '<%= CLIENT_DIR %>'
        options:
          htmlmin:
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeComments:                 true, # Only if you don't use comment directives!
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true

    # Replace references to minified versions when building the project for a dist version
    replace:
      dist:
        src: ['<%= BUILD_DIR %>/index.html']
        dest: '<%= BUILD_DIR %>/index.html'
        replacements: [
          from:'parse-1.2.18.js'
          to:'parse-1.2.18.min.js'
        ,
          from:'jquery.js'
          to:'jquery.min.js'
        ,
          from:'/angular.js'
          to: '/angular.min.js'
        ,
          from:'/angular-animate.js'
          to: '/angular-animate.min.js'
        ]


  # Dependencies
  grunt.loadNpmTasks('grunt-ngmin')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-contrib-mincss')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-express-server')
  grunt.loadNpmTasks('grunt-karma')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-parallel')
  grunt.loadNpmTasks('grunt-usemin')
  grunt.loadNpmTasks('grunt-rev')
  grunt.loadNpmTasks('grunt-angular-templates')
  grunt.loadNpmTasks('grunt-text-replace')


