const request = require('request')
  , FeedParser = require('feedparser');
  const http = require('http');
function fetch(feed){
  /*
    let rq = request(feed,{timeout: 10000, pool: false});
    

    rq.setMaxListeners(50);
    rq.setHeader('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:57.0) Gecko/20100101 Firefox/57.0');
    rq.setHeader('accept', 'text/html,application/xhtml+html');
    
    let feedparser = new FeedParser();
    
    rq.on('error', err => { if(err) console.log(err)});
    rq.on('response', resp => {
        var stream = this;
        console.log(resp);
        console.log(stream);
        //if(resp.statusCode !== 200) return this.emit('error', new Error('Not OK'));
        //stream.pipe(feedparser);
  });
  ####################################################*/
  // http://api.katsomo.fi/api/web/search/categories/33/assets.json?text=*
let feedparser = new FeedParser();
const options = {
  protocol: 'http:',
  hostname: 'api.katsomo.fi',
  port: 80,
  path: '/api/web/search/categories/33/assets.json?text=' + feed + '*',
  method: 'GET'
  
};

const req = http.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    //process.stdout.write(d);
    console.log("DATAAAAAA");
    console.log(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
/*###########################################################*/
  

  feedparser.on('error', done);
  feedparser.on('end', done);
  feedparser.on('readable', function() {
    let post;
    while (post = this.read()) {
      console.log(post);
    }
  });
}


function getParams(str) {
  var params = str.split(';').reduce(function (params, param) {
    var parts = param.split('=').map(function (part) { return part.trim(); });
    if (parts.length === 2) {
      params[parts[0]] = parts[1];
    }
    return params;
  }, {});
  return params;
}

function done(err) {
  if (err) {
    console.log(err, err.stack);
    return process.exit(1);
  }
}

module.exports = fetch;