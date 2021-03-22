const $petsForm = document.querySelector("#pets-form");
const $displayArea = document.querySelector("#display-area");

const printResults = (resultArr) => {
  console.log(resultArr);

  const petHTML = resultArr.map(
    ({id,pet_name,...rest}) => {
      return `
  <div>
    <div data-id=${id}>
      <h4>${pet_name}</h4>
    </div>
  </div>
    `;
    
//     <p>
//     Color: ${color.substring(0, 1).toUpperCase() + color.substring(1)}<br/>
    
//     Species: ${
//       species.substring(0, 1).toUpperCase() + species.substring(1)
//     }<br/>

//     Age: ${age}<br/>

//     Size: ${size.substring(0, 1).toUpperCase() + size.substring(1)}<br/>
//     Other Traits: ${otherTraits
//       .map(
//         (trait) =>
//           `${trait.substring(0, 1).toUpperCase() + trait.substring(1)}`
//       )
//       .join(", ")}</p>
//   </div>
// </div>
    }
  );

  $displayArea.innerHTML = petHTML.join("");
};

const getPets = (formData = {}) => {
  let queryUrl = "/api/adopt?";

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  console.log(queryUrl);

  fetch(queryUrl)
    .then((response) => {
      if (!response.ok) {
        return alert("Error: " + response.statusText);
      }
      return response.json();
    })
    .then((petData) => {
      console.log(petData);
      printResults(petData);
    });
};

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
  const selectedTraits = $petsForm.querySelector('[name="other"').selectedOptions;

  for (let i = 0; i < selectedTraits.length; i += 1) {
    otherTraitArr.push(selectedTraits[i].value);
  }

  const otherTraits = otherTraitArr.join(",");

  const petObject = { color, species, size, ...otherTraits };

  getPets(petObject);
};

$petsForm.addEventListener("submit", handleGetPetsSubmit);

getPets();
