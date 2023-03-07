function checkAge(){
    const ageField = document.getElementById('age');
    ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try{
        const age = parseInt(ageText);

        if(isNaN(age)){
            throw 'Please enter a number';
        }
        else if(age < 18){
            throw 'below 18 not allowed';
        }
        else if(age > 35){
            throw 'above 35 is not allowed';
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        console.log("ERROR:", err);
        errorTag.innerHTML = 'ERROR: ' + err;
    }
    finally{
        console.log('All done inside in try catch');
    }
    console.log(1111);
}

checkAge();