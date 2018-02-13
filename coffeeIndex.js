// Generated by CoffeeScript 1.12.7
(function() {
  var http, port, server;

  http = require('http');

  port = process.env.port || 1337;

  server = http.createServer(req, res)(function() {
    res.writeHeader(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello, World!');
    return res.end().listen(port);
  });

  server.listen(port);

  console.log("Server running at http://localhost:%d", port);

}).call(this);
