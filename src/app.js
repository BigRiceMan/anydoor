const http=require('http')
const conf=require('./config/defaultConfig')

const server=http.createServer((req,res)=>{
	if(err){
		res.statusCode=400
		res.setHeader('Content-Type','text/plain')
		res.end('${filePath} is not a directory or file')
	}	return
	if(stats.ifFile(){
		res.statusCode=200
		res.setHeader('Content-TYpe','text/plain')
		fs.createReadStream(filePath).pipe(res)
	})else if(stats.isDirectory()){
		fs.readir(filePath,(err,files)=>{
		res.statusCode=200
		res.setHeader('Content-TYpe','text/plain')
	 	res.end(files.join(','))
		})
	}
	res.statusCode =200
	res.setHeader('Content-Type','text/html')
	res.write('<html>')
	res.write('<body>')
	res.write('Hello http')
	res.write('<body>')
	res.write('</html>')
	res.end()
})
server.listen(conf.port,conf.host,()=>{
	console.log('server running at'+conf.host+':'+conf.port)
})