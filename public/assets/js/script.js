let $petsForm;
let $getPetsBtn;
let $displayArea;
if (window.location.pathname.match(/\/adopt\/*/)) {
    $petsForm = document.querySelector("#pets-form");
    $getPetsBtn = document.querySelector("#get-pets-btn");
    $displayArea = document.querySelector("#display-area");
}

  async function applyPetFilter(event) {
    event.preventDefault();
    const petFormData = document.querySelectorAll('#pets-form')[0];
    console.log(petFormData);
    // alert('Pet Form Submit')
    let searchParams = [];
    const species = Array.from(petFormData.querySelectorAll('input[name="species"')).filter( option => option.checked).map( el => {return `${el.name}=${el.value}&`}).join('')
    const color = Array.from(petFormData.querySelectorAll('input[name="color"')).filter( color => color.checked).map(el => {return `${el.name}=${el.value}&`}).join('')
    const size = Array.from(petFormData.querySelectorAll('input[name="size"')).filter( size => size.checked).map( el => {return `${el.name}=${el.value}&`}).join('');
    const q = { species,color,size };
    console.log(species);
    console.log(q);
    // const 
    // let at = {species,color,size}.join('&');
    // const post_url = document.querySelector('input[name="post-url"]').value;
    // let q = { species, color, size, ...rest };
    let qurl = `/api/pets/q?${species}&${color}&${size}`
    const response = await fetch(qurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
     
    if (response.ok) {
      window.location.replace(`/adopt/q?${species}&${color}&${size}`)
    } else {
      alert(response.statusText);
    }
    // document.reload();
  }
  if (window.location.pathname.match(/\/adopt.*/)) {
    document.querySelector('#get-pets-btn').addEventListener("click",applyPetFilter);
  }