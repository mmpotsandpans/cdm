const fs = require('fs')
const path = require('path')

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'csvjson.json'), 'utf-8'))
const noLinks = ['enDetails']
const links = ['source']
data.forEach(d => {
    const nLs = []
    const ls = []
    const regex = /(\(v|memorial|funeral\))?(https?:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    const words = d.enDetails.replace(/\r?\n|\r/g, '').split(' ')
    words.forEach(w => {
        if (regex.test(w)) {
            ls.push(w)
        } else {
            nLs.push(w)
        }
    })
    noLinks.push(nLs.join(' '))
    links.push(ls.join(' / '))
})
fs.writeFileSync('/tmp/links', links.join('\n'))
fs.writeFileSync('/tmp/nolinks',noLinks.join('\n'))
