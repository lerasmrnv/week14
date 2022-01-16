function showMessage() {
    let nameInput = document.getElementById('name');

    console.log(nameInput.value);
    
    alert(`Привет ${nameInput.value}!`);
}