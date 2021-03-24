let $petsForm;
let $getPetsBtn;
let $displayArea;
if (window.location.pathname.match(/\/adopt\/*/)) {
    $petsForm = document.querySelector("#pets-form");
    $getPetsBtn = document.querySelector("#get-pets-btn");
    $displayArea = document.querySelector("#display-area");
}
const join_query =   (params)  => {
  let str = params.join('&');
  return str
  // return str.replace(/&[^\w]/,/\1/);
}
  async function applyPetFilter(event) {
    event.preventDefault();
    const petFormData = document.querySelectorAll('#pets-form')[0];
    console.log(petFormData);
    // alert('Pet Form Submit')
    let searchParams = [];
    const species = Array.from(petFormData.querySelectorAll('input[name="species"')).filter( option => option.checked).map( el => {return `${el.name}=${el.value}`});
    const color = Array.from(petFormData.querySelectorAll('input[name="color"')).filter( color => color.checked).map(el => {return `${el.name}=${el.value}`})
    const size = Array.from(petFormData.querySelectorAll('input[name="size"')).filter( size => size.checked).map( el => {return `${el.name}=${el.value}`});
    const q = join_query([species,color,size])
      // species,
      // color,
      // size };
    console.log(species, size, color);
    console.log(q);
    // console.log(q)
    // const 
    // let at = {species,color,size}.join('&');
    // const post_url = document.querySelector('input[name="post-url"]').value;
    // let q = { species, color, size, ...rest };

    let qurl = `/api/pets/q?${q}`
    const response = await fetch(qurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
     
    if (response.ok) {
    //  console.log(window.location)
      window.location.replace(`/adopt/q?${q}`)
    } else {
      alert(response.statusText);
    }
    // document.reload();
  }
  if (window.location.pathname.match(/\/adopt.*/)) {
    document.querySelector('#get-pets-btn').addEventListener("click",applyPetFilter);
  }