'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ExpressGenerator = module.exports = function ExpressGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ExpressGenerator, yeoman.generators.Base);

ExpressGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

ExpressGenerator.prototype.createFolders = function createFolders () {
  this.mkdir('app');
  this.mkdir('app/config');
  this.mkdir('app/config/middleware');
  this.mkdir('app/controllers');
  this.mkdir('app/models');
  this.mkdir('app/utils');
  this.mkdir('app/views');
  this.mkdir('app/views/assets');
  this.mkdir('app/views/assets/css');
  this.mkdir('app/views/assets/img');
  this.mkdir('app/views/assets/js');
  this.mkdir('app/views/layouts');
  this.mkdir('app/views/partials');
  this.mkdir('shared');
  this.mkdir('shared/controllers');
  this.mkdir('shared/models');
  this.mkdir('shared/views');
  this.mkdir('site');
  this.mkdir('site/controllers');
  this.mkdir('site/models');
  this.mkdir('site/views');
  this.mkdir('site/views/assets');
  this.mkdir('site/views/assets/css');
  this.mkdir('site/views/assets/img');
  this.mkdir('site/views/assets/js');
  this.mkdir('site/views/layouts');
  this.mkdir('site/views/partials');
};

ExpressGenerator.prototype.getProjectFiles = function getProjectFiles () {
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_README.md', 'README.md');
};

ExpressGenerator.prototype.createAppFiles = function createAppFiles () {

};
