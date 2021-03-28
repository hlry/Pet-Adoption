const $petsForm = document.querySelector("#pets-form");
const $submitBtn = document.querySelector("#submit-pet")
const handlePetsFormSubmit = (event) => {
  event.preventDefault();

  const pet_name = $petsForm.querySelector('[name="pet-name"]').value;

  const colorRadioHTML = $petsForm.querySelectorAll('[name="color"');
  let color;
  for (let i = 0; i < colorRadioHTML.length; i += 1) {
    if (colorRadioHTML[i].checked) {
      color = colorRadioHTML[i].value;
    }
  }
  if (color === undefined) {
    color = "";
  }

  const speciesRadioHTML = $petsForm.querySelectorAll('[name="species"');
  let species;
  for (let i = 0; i < speciesRadioHTML.length; i += 1) {
    if (speciesRadioHTML[i].checked) {
      species = speciesRadioHTML[i].value;
    }
  }
  if (species === undefined) {
    species = "";
  }

  const age = $petsForm.querySelector('[name="age"]').value;

  const sizeRadioHTML = $petsForm.querySelectorAll('[name="size"');
  let size;
  for (let i = 0; i < sizeRadioHTML.length; i += 1) {
    if (sizeRadioHTML[i].checked) {
      size = sizeRadioHTML[i].value;
    }
  }
  if (size === undefined) {
    size = "";
  }

  const selectedOtherTraits = $petsForm.querySelector('[name="other"').selectedOptions;
  const otherTraits = [];
  for (let i = 0; i < selectedOtherTraits.length; i += 1) {
    otherTraits.push(selectedOtherTraits[i].value);
  }

  const description = $petsForm.querySelector('[name="description"]').value;

  const petObject = {
    pet_name,
    color,
    species,
    age,
    size,
    otherTraits,
    description,
  };

  fetch("/api/pets", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(petObject),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      alert("Error: " + response.statusText);
    })
    .then((postResponse) => {
      console.log(postResponse);
      alert("Thank you for adding a pet!");
    });
};
$submitBtn.addEventListener("click", handlePetsFormSubmit);
//$petsForm.addEventListener("submit", handlePetsFormSubmit);
