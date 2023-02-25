const evenLength = (friends) => {
    even = [];
    for(let friend of friends){
        if(friend.length % 2 === 0){
            even.push(friend);
        }
    }
    return even;
}

console.log(evenLength(['Ad', 'Harun', 'Arif']));