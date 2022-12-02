const { Atem } = require('atem-connection')

const IP = "192.168.1.50";
const MULTITHREADED = true;

const myAtem = new Atem({ disableMultithreaded: !MULTITHREADED})
myAtem.on('info', console.log)
myAtem.on('error', console.error)

myAtem.connect(IP)
	.then(() => console.log("connected"))
	.catch(console.error)

myAtem.on('connected', () => {
	myAtem.changeProgramInput(3).then(() => {
		console.log('Program input set')
	})
})