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

function getResponse(req,method) {
  if(req.method === method) {
    return method;
  }
  else {
    return `need ${method} request`;
  }
}

http.createServer((req,res) => {
  switch(req.url)
  {
    case '/about':
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end(getDataFromFIle('about.html'));
      break;
    case '/index':
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end(getDataFromFIle('index.html'));
      break;
    case '/services':
      res.writeHead(200, {'Content-type': 'text/html'});
      res.end(getDataFromFIle('services.html'))
      break;
    case '/json':
      res.writeHead(200, {'Content-type': 'application/json'})
      res.end(getDataFromFIle('package.json'))
      break;
    case '/post':
      res.writeHead(200, {'Content-type': 'text/plain'})
      res.end(getResponse(req,'POST'));
      break;
    case '/delete':
      res.writeHead(200, {'Content-type': 'text/plain'})
      res.end(getResponse(req,'DELETE'));
      break;
    case '/put':
      res.writeHead(200, {'Content-type': 'text/plain'})
      res.end(getResponse(req,'PUT'));
      break;
    case '/patch':
      res.writeHead(200, {'Content-type': 'text/plain'})
      res.end(getResponse(req,'PATCH'));
      break;
    default:
      res.writeHead(404, {'Content-type': 'text/plain'})
      res.end('404 not find')
  }
}).listen(3000, () => console.log('Server is staring on port 3000'));
