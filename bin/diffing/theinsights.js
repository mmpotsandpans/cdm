const fs = require('fs')

// data from https://datastudio.google.com/u/0/reporting/82d91943-5925-478a-8d6b-6884578c836c/page/U0A7B
const data = fs.readFileSync(__dirname + '/theinsights.csv', 'utf-8')
const lines = data.split('\n').slice(1)
const sourceNames = lines.map(l => {
    const name = l
        .replace(/"|\s/g, '')
        .split(',')[0].normalize('NFD')
    return name.replace(/^(ကို|မောင်|ဦီး|ဦး|ဒေါ်|မ)/, '')
}).sort()

const names = fs.readFileSync(__dirname + '/names', 'utf-8')
    .split('\n')
    .map(l => l.replace(/\s/g, '').normalize('NFD'))
    .sort()
const diff = sourceNames.filter(name => !names.includes(name)).join('\n')
fs.writeFileSync(__dirname + '/results', diff)