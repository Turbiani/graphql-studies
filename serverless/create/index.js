'use strict';
const querystring = require('querystring');

const prefix = "mysite.com";

module.exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event));
    const submitted = querystring.parse(event.body).link;
    console.log('URL submitted: ' + submitted);
    callback(
        null,
        {
            statusCode: 200,
            body: `
<html>
  <body>
    <h3>URL ${submitted} has been shortened:
        <a href="https://${prefix}/fake">${prefix}/fake</a>
    </h3>
  </body>
</html>`,
            headers: {'Content-Type': 'text/html'},
        }
    );
}
