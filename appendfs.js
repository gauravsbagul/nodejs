console.log('starting project...');

import { appendFile } from 'fs';

//import fs1 from 'fs';
const os = require('os');

var user = os.userInfo();
console.log(user);

  fs.appendFile('test.txt','hello friends this is appended string. again new file with import ');
  fs.appendFile('test1.txt','hi this is new file and new append, and import');