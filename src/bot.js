const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: ' Emc1TmkexDaAdn3DfS2a.apGNZMzba418M2CeQxD9/G.TOfUUo98+oW/iD8ML+Uasf4F1uwIg64JJ3ouWXrTJgg=',
	certificate: '211a96a151b17c3d3e9f00a8f5b60aae59d34ea4f574fef07808e760275507e6',
}
// let client =  new LineConnect(auth);
let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
