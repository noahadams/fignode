var spawn = require('child_process').spawn

/**
 * Pass some text to a figlet process, set a callback to receive the output
 * @param {String} text String to be passed through figlet
 * @param {String} font Name of the figlet font to use
 * @param {Function} cb Function that will be called with the figletted string
 */

function figlet(text, font, cb) {
  
  var f = spawn('figlet', ['-f', font]);

  f.stdin.write(text);
  
  // Hook up the plumbing
  f.stdout.on('data', function (data) {
    cb(data.toString('utf8'));
  });

  // Give figlet a kick by closing stdin
  f.stdin.end();  
} 

module.exports = figlet;
