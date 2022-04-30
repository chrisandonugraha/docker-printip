var express = require('express');
var app = express();
var requestIp = require(request-ip)
      
app.get('/',function(request, response) {
  
    var clientIp = requestIp.getClientIp(request);
    console.log(clientIp);
    var Hits = request.socket.remoteAddress(request);
    console.log(Hits);
    
});
  
app.listen(80, function () {
    console.log('app listening on port 80!')
})