const generators = require('yeoman-generator');
const initializing = require('./groups/initializing');
const prompting = require('./groups/prompting');
const configuring = require('./groups/configuring');
const defaults = require('./groups/default');
const writing = require('./groups/writing');
const conflicts = require('./groups/conflicts');
const install = require('./groups/install');
const end = require('./groups/end');



module.exports = generators.extend({

    // Your initialization methods (checking current project state, getting configs, etc)
    initializing,

    // Where you prompt users for options (where you'd call this.prompt())
    prompting,

    // Saving configurations and configure the project
    // (creating .editorconfig files and other metadata files)
    configuring,

    // If the method name doesn't match a priority, it will be pushed to this group.
    default: defaults,

    // Where you write the generator specific files (routes, controllers, etc)
    writing,

    // Where conflicts are handled (used internally)
    conflicts,

    // Where installation are run (npm, bower)
    install,

    // Called last, cleanup, say good bye, etc
    end
});
