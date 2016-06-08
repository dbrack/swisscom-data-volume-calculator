import fs from 'fs'

if (process.argv.length !== 3) {
	console.log('Usage: babel-node volume.js [csvFilePath]');
	process.exit(1);
}

const fileName = process.argv[2]
const volume = fs.readFileSync(fileName, 'utf8')
	.trim()
	.split('\n')
	.map(line => line.split(';'))
	.filter(line => line[4].toLowerCase().indexOf('volumentaxiert') !== -1)
	.map(line => parseInt(line[5], 10))
	.reduce((p, c) => p + c, 0) / 1000000

console.log('Total GB used:', volume)
