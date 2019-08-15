import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';

const port = 3000;
const pathname = path.join('public', 'index.html');
const contentType = 'text/html';

const requestHandler = (request, response) => {
  console.log(request.url);

  fs.readFile(pathname, (err, data) => {
    response.setHeader('Content-type', contentType);
    response.end(data);
  })
}

const server = http.createServer(requestHandler)
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
