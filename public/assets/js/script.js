let $petsForm;
let $getPetsBtn;
let $displayArea;
if (window.location.pathname.match(/\/adopt\/*/)) {
    $petsForm = document.querySelector("#pets-form");
    $getPetsBtn = document.querySelector("#get-pets-btn");
    $displayArea = document.querySelector("#display-area");
}
const join_query =   ( o => {
  // let {...n} = o.split(':')
  return o.filter( v => { return (v !== "") }).join('&')
  return a.join('&');
  // let str = params.join('=');
  
})
const applyPetFilter = async function (event) {
    event.preventDefault();
    const petFormData = document.querySelectorAll('#pets-form')[0];
    console.log(petFormData);
    // alert('Pet Form Submit')
    // let searchParams = ['/filter=true']
    const species = Array.from(petFormData.querySelectorAll('input[name="species"')).filter( option => option.checked).map( el => { return `${el.name}=${el.value}` }).join('')
    const color = Array.from(petFormData.querySelectorAll('input[name="color"')).filter( color => color.checked).map(el => { return `${el.name}=${el.value}`}).join('')
    const size = Array.from(petFormData.querySelectorAll('input[name="size"')).filter( size => size.checked).map(el => {return `${el.name}=${el.value}`}).join('');
    const other = Array.from(petFormData.querySelector('select[name="other"').selectedOptions).map( el => {return `${el.value}`}).join('&');
    const obj = [species , color , size,  other]
    const q = join_query(obj)
      // species,
      // color,
      // size };
    console.log(obj);//, size, color);
    console.log(q);
    // console.log(q)
    // const 
    // let at = {species,color,size}.join('&');
    // const post_url = document.querySelector('input[name="post-url"]').value;
    // let q = { species, color, size, ...rest };
    if (q === "") return document.location.replace('/adopt');
    let qurl = `/api/pets/q?${q}`
    let response;
    try { 
      response = await window.fetch(qurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    
      // body: {qurl}
      })
      if (response.ok) {
      //  console.log(window.location)
        console.log(response.location);
        console.log(response.url);      
        // response.url.location.reload();
        document.location.replace(`/adopt/q?${q}`)
      } else {
          // document.reload();
          alert(response.statusText);
        }
    } catch (err) {
      console.error(err);
      // document.location.replace(`/adopt`)
    
    } 
    
    
  }
  if (window.location.pathname.match(/\/adopt.*/)) {
    document.querySelector('#get-pets-btn').addEventListener("click", applyPetFilter);
    // $displayArea.addEventListener("",$displayArea.reload());
  }