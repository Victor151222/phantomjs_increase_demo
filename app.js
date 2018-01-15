var page = require('webpage').create();

var index = 3000;
var url = 'https://www.baidu.com';
setInterval(function() {
    page.open(url, function(status) {
      
      if(status === "success") {
      	console.log("count:" + index + "    " +"Status:" + status);
      	index--;
      }
      if(index == 0) {
      	phantom.exit();
      }

    });
}, 1500);
