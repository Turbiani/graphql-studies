'use strict';

module.exports.greet = (event, context, callback) => {
  console.log(JSON.stringify(event));
  callback(null, {message: "Hi, this function worked!"});
};
