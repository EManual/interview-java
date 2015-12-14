var fs = require('fs')
var path = require('path')

var Target = './questions/'

for(var index=1;index<=115;index++){
    var dest = path.join(Target, index+'.md')
    if(!fs.existsSync()){
        fs.writeFileSync(dest, '')
    }
}
