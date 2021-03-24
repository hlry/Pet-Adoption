module.exports = {
    lookupOrDefault : function (object, propertyName, defaultValue, options) {
        var result = options.lookupProperty(object, propertyName)
        if (result !== null) {
            return result
        }
        return defaultValue
    },
    capitalize : function (str) {
        return `${str.substr(0,1).toUpperCase()}${str.species.slice(1)}`
    },
    displayProp : function(object, propertyName, options) {
        var value = options.lookupProperty(object,propertyName);
        // var c = capitalize(propertyName);
        return `${propertyName} : ${value}`;
    },
    id : function() {return this.id},
    pet_name : function () { return this.pet_name },
    age : function () { return this.age},
    color : function () { return this.color },
    size : function () { return this.size },
    species: function() {return (`
    ${this.species.substr(0,1).toUpperCase()}${this.species.slice(1)}`)},
    // user_id : function () { return this.user_id; },
    other: function() {return [`Microchip: ${this.microchip}`,`Vaccinated: ${this.vaccinated}`, `Potty Trained: ${this.potty_trained}`]},
    description: function() {return `${this.description}`},

}