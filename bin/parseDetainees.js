const fs = require('fs')
const path = require('path')

fs.readFile(path.resolve(__dirname, 'detainees.txt'), 'utf8', function(err, data) {
    if (err) throw err;
    const people = data.split('\n')
    const parsed = people.map(p => {
        const groups = p.match(/(.*)(\(.*\))/);
        if (groups) {
            return {
                name: groups[1].trim(),
                position: groups[2].replace('(', '').replace(')', '').trim()
            }
        } else {
            return {
                name: p,
                position: ''
            }
        } 
        
    })
    fs.writeFileSync(path.resolve(__dirname, '../src/resources/parsedDetainees.json'), JSON.stringify(parsed))
});