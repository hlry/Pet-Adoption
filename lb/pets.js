const fs = require("fs");
const path = require("path");

function filterByQuery(query, petsArray) {
  let otherTraitsArray = [];
  let filteredResults = petsArray;
  if (query.other) {
    if (typeof query.other === "string") {
      otherTraitsArray = [query.other];
    } else {
      otherTraitsArray = query.other;
    }
    otherTraitsArray.forEach((trait) => {
      filteredResults = filteredResults.filter(
        (pet) => pet.other.indexOf(trait) !== -1
      );
    });
  }
  if (query.name) {
    filteredResults = filteredResults.filter((pet) => pet.name === query.name);
  }
  if (query.color) {
    filteredResults = filteredResults.filter(
      (pet) => pet.color === query.color
    );
  }
  if (query.species) {
    filteredResults = filteredResults.filter(
      (pet) => pet.species === query.species
    );
  }
  if (query.size) {
    filteredResults = filteredResults.filter((pet) => pet.size === query.size);
  }
  if (query.description) {
    filteredResults = filteredResults.filter(
      (pet) => pet.description === query.description
    );
  }
  // return the filtered results:
  return filteredResults;
}

function findById(id, petsArray) {
  const result = petsArray.filter((pet) => pet.id === id)[0];
  return result;
}

function createNewPet(body, petsArray) {
  const pet = body;
  petsArray.push(pet);
  fs.writeFileSync(
    path.join(__dirname, "../data/pets.json"),
    JSON.stringify({ pets: petsArray }, null, 2)
  );
  return pet;
}

function validatePet(pet) {
  if (!pet.name || typeof pet.name !== "string") {
    return false;
  }
  if (!pet.color || typeof pet.color !== "string") {
    return false;
  }

  if (!pet.species || typeof pet.species !== "string") {
    return false;
  }

  if (!pet.size || typeof pet.size !== "string") {
    return false;
  }

  if (!pet.description || typeof pet.description !== "string") {
    return false;
  }
  if (!pet.other || !Array.isArray(pet.other)) {
    return false;
  }
  return true;
}

module.exports = {
  filterByQuery,
  findById,
  createNewPet,
  validatePet,
};
