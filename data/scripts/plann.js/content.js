// custom server side script used to fetch data from remote REST API
var http = require('http');

function beforeRender(req, res, done) {
    require('request')({
      url:"https://raw.githubusercontent.com/rahatgandhi/report1/master/report.json",
      json:true
    }, function(err, res, body){
        req.data = JSON.stringify(body);
        done();
    });
}