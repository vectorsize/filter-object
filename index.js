
'use strict';
// module.exports = function (obj, pass) {
//   return Object.keys(obj).reduce(function(prev, val) {
//     if (pass.indexOf(val) !== -1) prev[val] = obj[val];
//     return prev;
//   }, {});
// };

module.exports = function filter(obj, valid) {
  var filtered = {};
  for(var prop in obj) if(valid.indexOf(prop) !== -1) filtered[prop] = obj[prop];
  return filtered;
};
