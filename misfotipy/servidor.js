var http = require('http'),
    st   = require('node-static'),
    opts = { cache: false },
    file = new st.Server('./', opts),
    port = process.env.PORT || 8088;

http.createServer(function (req, res) {
    file.serve(req, res);
}).listen(port);

console.log("App running on http://localhost:%s", port);