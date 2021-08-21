console.log('yooo we be fixin!!')

var fs = require('fs');

const file = './dist/index.esm.js'

fs.readFile(file, (err, data) => {
  if (err) throw err
  else {
    const all = data.toString()
    const splitTerm = 'var addictionals = _a.addictionals'
    const splitArray = all.split(splitTerm)
    const buf = new Buffer.from(`${splitArray[0]}${splitTerm} || []${splitArray[1]}`)
    const fd = fs.openSync(file,'r+')
    fs.writeSync(fd, buf, 0)
  }
})
