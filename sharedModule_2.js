const skill = require('./sharedModule_1.js');
// Shared Module
// skill.language = "PHP"

// Object Factory
let skillObj = skill();
skillObj.language = "Javascript";

console.log("Saya bisa "+skillObj.language);
