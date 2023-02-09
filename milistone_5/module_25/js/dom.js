// const hByID = document.getElementById('new-header');
// console.log(hByID);
// console.log(hByID.innerText)
// hByID.innerText = 'This is changed Head';
// console.log(hByID.innerText);

const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '15px';
    section.style.backgroundColor = 'lightgray';
}

const colorSection = document.getElementById('color-section');
colorSection.style.backgroundColor = 'lightblue';

colorSection.classList.remove('text-center');