
let $petsForm;
let $getPetsBtn;
let $displayArea;
if (window.location.pathname.match(/\/adopt\/*/)) {
    $petsForm = document.querySelector("#pets-form");
    $getPetsBtn = document.querySelector("#get-pets-btn");
    $displayArea = document.querySelector("#display-area");
}
// $(document).ready(function() {


const join_query =   ( o => {
  return o.filter( v => { return (v !== "") }).join('&')
})
const applyPetFilter = async function () {
    // event.preventDefault();
    const petFormData = document.querySelectorAll('#pets-form')[0];
    // console.log(petFormData);
    const species = Array.from(petFormData.querySelectorAll('input[name="species"')).filter( option => option.checked).map( el => { return `${el.name}=${el.value}` }).join('&')
    const color = Array.from(petFormData.querySelectorAll('input[name="color"')).filter( color => color.checked).map(el => { return `${el.name}=${el.value}`}).join('&')
    const size = Array.from(petFormData.querySelectorAll('input[name="size"')).filter( size => size.checked).map(el => {return `${el.name}=${el.value}`}).join('&');
    const other = Array.from(petFormData.querySelector('select[name="other"').selectedOptions).map( el => {return `${el.value}`}).join('&');
    const obj = [species , color , size,  other]
    const q = join_query(obj)

    console.log(obj);//, size, color);
    console.log(q);
    if (q === "") return document.location.replace('/adopt');
    let qurl = `/adopt/q?${q}`
    return await fetch(qurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html'
      }});

  }

if (window.location.pathname.match(/\/adopt.*/)) {
  document.querySelector('#get-pets-btn').addEventListener("click", (event) => {
    event.preventDefault();
    applyPetFilter()
      .then( response => {
        if (response.ok) {
          return response.text();
        }
      
    }).then( text => {
      $displayArea.innerHTML = text;
    })
    .catch( err => {
      console.log(err)
      return 
    })
  });
}
