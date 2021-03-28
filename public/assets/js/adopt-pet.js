async function deleteFormHandler(event) {
    event.stopPropagation();
    target = event.target;

    const id = JSON.parse(target.parentElement.parentElement.getAttribute('data-id')) //window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1

    const response = await fetch(`/api/pets/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/adopt');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.pet-result').addEventListener('click', deleteFormHandler);
  