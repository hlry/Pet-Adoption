let $petsForm;
let $getPetsBtn;
let $displayArea;
if (window.location.pathname.match(/\/adopt/)) {
    $petsForm = document.querySelector("#pets-form");
    $getPetsBtn = document.querySelector("#get-pets-btn");
    $displayArea = document.querySelector("#display-area");
}

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

let activePets = [];

const getPets = async () => {
    await fetch('/api/adopt',{ method: 'GET', headers: {
        'Content-Type': 'application/json'
      }});
}

const renderPets = async () => {
    let jsonPets; 
    try { 
        await getPets().then( jsonPets => {
            if (jsonPets.ok) {
                return jsonPets.data;
            } 
        })
    } catch (e ) {
        console.log(e)
        // return
    }
    console.log("==========================================\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nRENDER PETS");
    // console.log(jsonPets);
    // $displayArea.innerHTML = jsonPets;
    // $displayArea.innerHTML = JSON.stringify(jsonPets.pets);
}

  const parseFormData = () => {
    // event.preventDefault();
    formData = new FormData(document.getElementById('pets-form'));
    // formData.keys
    let search = formData.getAll('species');
    return 
  
  }
  const handleGetPetsSubmit = (event) => {
    event.preventDefault();
    const speciesRadioHTML = $petsForm.querySelectorAll('[name="species');
    let species;
    for (let i = 0; i < speciesRadioHTML.length; i += 1) {
      if (speciesRadioHTML[i].checked) {
        species = speciesRadioHTML[i].value;
      }
    }

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
    // getPets();
    // renderPets();
  };
  async function applyPetFilter(event) {
    event.preventDefault();
    const petFormData = document.querySelectorAll('#pets-form')[0];
    console.log(petFormData);
    // alert('Pet Form Submit')
    let searchParams = [];
    const species = Array.from(petFormData.querySelectorAll('input[name="species"')).filter( option => option.checked).map( el => {return `${el.name}=${el.value}`}).join('')
    const color = Array.from(petFormData.querySelectorAll('input[name="color"')).filter( color => color.checked).map(el => {return `${el.name}=${el.value}`}).join('')
    const size = Array.from(petFormData.querySelectorAll('input[name="size"')).filter( size => size.checked).map( el => {return `${el.name}=${el.value}`}).join('');
    const q = { species,color,size };
    console.log(species)
    // const post_url = document.querySelector('input[name="post-url"]').value;
    // let q = { species, color, size, ...rest };
    let qurl = `/api/pets/q?${species}`
    const response = await fetch(qurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
     
    if (response.ok) {
      window.location.replace(`/adopt/q?${species}`)
      // window.location.reload()
      // document.reload();
      //document.location.replace(`/pets/q?${species}`);
      // document.reload();
    } else {
      alert(response.statusText);
    }
    // document.reload();
  }
  if (window.location.pathname.match(/\/adopt.*/)) {
    document.querySelector('#get-pets-btn').addEventListener("click",applyPetFilter);
  }