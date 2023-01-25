const http = require('http')
const characters = require('../../../../../../../../Downloads/rick_and_morty/rick_and_morty/back/src/utils/data')

http.createServer((request, response) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const url = request.url

  if(url.includes('rickandmorty/character')){
    let id = url.split('/').at(-1)

    let charFilter = characters.find(char => char.id === Number(id))

    res
    .writeHead(200, {"Contenty-type": "application/json"})
    .end(JSON.stringify(charFilter))
  }

}).listen(3001, 'localhost')