// document.getElementById('btn-more').addEventListener('mousemove', function(){
//     console.log("More events");
// })

// document.getElementById('text-field').addEventListener('focus', function(){
//     console.log('Event Trigger');
// })

document.getElementById('text-field').addEventListener('blur', function(){
    console.log('Event Trigger blur');
})

// document.getElementById('text-field').addEventListener('keydown', function(event){
//     console.log(event.target.value);
// })

// document.getElementById('text-field').addEventListener('keypress', function(event){
//     console.log(event.target.value);
// })

document.getElementById('text-field').addEventListener('keyup', function(event){
    console.log(event.target.value);
})