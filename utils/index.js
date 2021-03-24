var _ = require('lodash');

const flattenQuery = function(body) {
    var traits = _.valuesIn(body.otherTraits);
    var vals = _.fill(traits, true);
    return _.merge(_.omit(body, 'otherTraits'), _.zipObject(body.otherTraits,vals));
}
const format_url = function(url) {
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0];
};      
module.exports = {format_url, flattenQuery};