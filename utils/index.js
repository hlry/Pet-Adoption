var _ = require('lodash');

function flattenQuery(body) {
    var traits = _.valuesIn(body.otherTraits);
    var vals = _.fill(traits, true);
    return _.merge(_.omit(body, 'otherTraits'), _.zipObject(body.otherTraits,vals));
}
 
module.exports = {flattenQuery};