const loadAlert = () => {
    alert('This is an alert message');
}

const loadConfirm = () => {
    const agreed = confirm('Do you agree?');
    if(agreed === true){
        alert('Thanks for agreeing!!');
    }
    else{
        alert('Sorry for that');
    }
}

const getInfo = () => {
    const name = prompt('Enter your name');
    if(name === null){
        alert('You have to enter a name');
    }
    else{
        alert('You typed ' + name);
    }
}