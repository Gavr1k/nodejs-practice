const http = require('http');

const fs = require('fs');

const baseDir = '/Users/andreihauryk/Desktop/nodejs-practice/nodejs-practic/hw1/';

function getDataFromFIle(fileName) {
  const path = baseDir + fileName;
  if(fs.existsSync(path)){
    const data = fs.readFileSync(path, (err) => {
      if(err){
        return 'error';
      }
    }).toString();
    return data;
  }
  else {
    console.log('ERROR: file', fileName, 'not exist');
    return 'error';
  }
}

http.createServer((req,res) => {
  console.log('req url:::::',req.url)
  switch(req.url)
  {
    case '/about':
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end(getDataFromFIle('about.html'))
    case '/index':
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end(getDataFromFIle('index.html'))
    case '/services':
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end(getDataFromFIle('services.html'))
    case '/json':
      res.writeHead(200, {'Content-type': 'application/json'})
      res.end(getDataFromFIle('package.json'))
    default:
      res.writeHead(404, {'Content-type': 'text/plain'})
      res.end('404 not find')
  }
}).listen(3000, () => console.log('Server is staring on port 3000'));
