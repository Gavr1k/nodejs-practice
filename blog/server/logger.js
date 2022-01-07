const fs = require('fs')

const saveDateToFile = (log,fileName) => {

  if(!fs.existsSync(fileName)) { //если нет файла создаем
    const logTemplate = {
      logs: []
    }
    fs.writeFileSync(fileName, JSON.stringify(logTemplate));
  }
  
  fs.readFile(fileName, 'utf-8', (error, data) => {
    if(error) return console.log(error)
    let logs = JSON.parse(data)
    logs.logs.push(log)
    fs.writeFile(fileName,JSON.stringify(logs), function(err){
      if(err) return console.log(err);
  });
  })
}

const logger = (req,res,next) => {
  const log = {}
  log.rout = req.originalUrl
  log.method = req.method

  if( JSON.stringify(req.params)  !== '{}') {
    log.params = req.params
  }
  if(req.body !== undefined) {
    log.body = req.body
  }
  const date = new Date()
  log.date = date.toLocaleString()

  saveDateToFile(log,'logs.json')
  next()
}

module.exports = logger