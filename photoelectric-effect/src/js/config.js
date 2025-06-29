(function () {
    'use strict';

    var config = {
        paths: {
            jquery:     '../../bower_components/jquery/dist/jquery',
            underscore: '../../bower_components/underscore/underscore',
            backbone:   '../../bower_components/backbone/backbone',
            bootstrap:  '../../bower_components/bootstrap/dist/js/bootstrap.min',
            text:       '../../bower_components/requirejs-text/text',
            pixi:       '../../bower_components/pixi/bin/pixi',
            nouislider: '../../bower_components/nouislider/distribute/jquery.nouislider.all.min',

            'vector2-node':          '../../node_modules/vector2-node-shimmed/index',
            'object-pool':           '../../node_modules/object-pool-shimmed/index',
            'circular-list':         '../../node_modules/circular-list-shimmed/index',
            'bootstrap-select':      '../../node_modules/bootstrap-select/js/bootstrap-select',
            'bootstrap-select-less': '../../node_modules/bootstrap-select/less/bootstrap-select',
            'gauss-random':          '../../node_modules/gauss-random-shimmed/sample',

            'lasers':          '../../../lasers/src/js',
            'discharge-lamps': '../../../discharge-lamps/src/js',
            
            views:      '../js/views',
            models:     '../js/models',
            assets:     '../js/assets',
            constants:  '../js/constants',
            templates:  '../templates',
            styles:     '../styles',
            common:     '../../../common'
        },

        packages: [{
            name: 'css',
            location: '../../bower_components/require-css',
            main: 'css'
        }, {
            name: 'less',
            location: '../../bower_components/require-less',
            main: 'less'
        }],

        less: {
            logLevel: 1,
            async: true,

            globalVars: {
                dependencyDir: '"/bower_components"'
            }
        },

        shim: {
            'bootstrap-select': {
                deps: ['jquery']
            }
        },
    };

    // Expose to the rest of the world 
    if (typeof module !== 'undefined') { 
        module.exports = config; // For nodejs 
    } 
    else if (typeof require.config !== 'undefined') { 
        require.config(config); // For requirejs 
    }
})();
