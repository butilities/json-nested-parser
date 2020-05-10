# json-nested-parser

Parser for nested json

# Install

`npm install json-nested-parser`

## Usage

`````javascript
const parser = require('json-nested-parser');

let string =
  '{"key":"value","object":{"key":"value","array":[1,{"key":{"key":{"key":"value"}}},"hello"]}}';
let parsed = parser.parse(string);
`````
