console.log('Event Summary works');

// option 1
function changeText(){
    const handlerStatus = document.getElementById('default-text');
    handlerStatus.innerText = 'Handled by function attached on onclick attribute';
}

// option 2
document.getElementById('add-listener').addEventListener('click', function(){
    document.getElementById('default-text').innerText = "Handled by function attached to addEventListener";
})

// update button
document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    
    const p = document.getElementById('input-text-display');
    p.innerText = inputText;

    inputField.value = '';
})

