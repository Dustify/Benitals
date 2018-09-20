const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port);

// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// var server = http.createServer(function (request, response) {
//     var file = request.url;

//     console.log(file);

//     if (file === '/') {
//         file = '/index.html';
//     }

//     file = path.join(__dirname, 'public' + file);

//     console.log(file);

//     fs.exists(file, function (exists) {
//         if (exists) {
//             var contentType = "text/plain";

//             if (file.endsWith('.html')) {
//                 contentType = 'text/html';
//             }

//             if (file.endsWith('.css')) {
//                 contentType = 'text/css';
//             }

//             if (file.endsWith('.js')) {
//                 contentType = 'text/javascript';
//             }

//             response.writeHead(200, { "Content-Type": contentType });
//             var stream = fs.createReadStream(file);

//             stream.pipe(response);
//         } else {
//             response.writeHead(404);
//             console.log('404');
//             response.end();
//         }
//     });
// });

// var port = process.env.PORT || 3000;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);
