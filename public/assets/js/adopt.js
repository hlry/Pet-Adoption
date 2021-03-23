const $petsForm = document.querySelector("#pets-form");
const $getPetsBtn = document.querySelector("#get-pets-btn");
const $displayArea = document.querySelector("#display-area");

// let formData  = new FormData();
const getPets = (event) => {
  event.preventDefault();

  let queryStr = parseFormData().join('&')
  const url = '/api/adopt?'+queryStr;
  fetch(url,
    {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
    });
};


const parseFormData = () => {
  // event.preventDefault();
  formData = new FormData(document.getElementById('pets-form'));
  // formData.keys
  let search = formData.getAll('species');
  return search;

}
const handleGetPetsSubmit = (event) => {
  event.preventDefault();
  const colorRadioHTML = $petsForm.querySelectorAll('[name="color');
  let color;
  for (let i = 0; i < colorRadioHTML.length; i += 1) {
    if (colorRadioHTML[i].checked) {
      color = colorRadioHTML[i].value;
    }
  }

  if (color === undefined) {
    color = "";
  }

  const speciesRadioHTML = $petsForm.querySelectorAll('[name="species');
  let species;
  for (let i = 0; i < speciesRadioHTML.length; i += 1) {
    if (speciesRadioHTML[i].checked) {
      species = speciesRadioHTML[i].value;
    }
  }

  if (species === undefined) {
    species = "";
  }

  const sizeRadioHTML = $petsForm.querySelectorAll('[name="size');
  let size;
  for (let i = 0; i < sizeRadioHTML.length; i += 1) {
    if (sizeRadioHTML[i].checked) {
      size = sizeRadioHTML[i].value;
    }
  }

  if (size === undefined) {
    size = "";
  }

  const otherTraitArr = [];
  const selectedTraits = $petsForm.querySelector('[name="other"').selectedOptions

  for (let i = 0; i < selectedTraits.length; i += 1) {
    otherTraitArr.push(selectedTraits[i].value);
  }

  const otherTraits = otherTraitArr;

  const petObject = { color, species, size, otherTraits };

  getPets(petObject)
};
const renderPets = async(pets) => {
  
  let jsonPets = await pets.json();
  $displayArea.innerHTML = `<div>${jsonPets}</div>`;

}
const applySearchFilters = () => getPets().then(renderPets); //then(getPets)


$getPetsBtn.addEventListener("click",getPets);



