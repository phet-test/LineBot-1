const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: 'Em7hDLcPkCAT7A2Yql06.5EmrTQ2t7zCnEmN8osfbTG.moXqIveI6MSxRvUoyVFZMzqgCV9Jbin6pNyR1n73JVE=','EmlZDJ2k1CFxzhDYKqg4.gHtuz/oS/3fWlOoalYiCXa.9PU/26gl3FB17h+Lker1BOr9q1sE04M9SIlcqbduTqQ=';
	certificate: 'cert here',
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
