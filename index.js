const traverse = require('traverse');
const isJson = require('is-valid-json');

const parse = (string) => {
  return traverse(string).map(function (node) {
    if (typeof node === 'string') {
      if (isJson(node)) {
        try {
          this.update(JSON.parse(node));
        } catch (err) {
          //
        }
      }
    } else if (node === null) {
      this.update('');
    }
  });
};

module.exports = {
  parse,
};
