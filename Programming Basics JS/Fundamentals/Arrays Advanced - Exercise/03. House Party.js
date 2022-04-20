function houseParty(array) {
let guestList=[];

for (let index = 0; index < array.length; index++) {
    let tokens = array[index].split(' ');
    if(tokens.length==3){
        if(!guestList.includes(tokens[0])){
        guestList.push(tokens[0]);
        }else{
            console.log(`${tokens[0]} is already in the list!`);
        }
    }else{
        if(guestList.includes(tokens[0])){
            for (let i = 0; i < guestList.length; i++) {
                if(guestList[i]== tokens[0]){
                    guestList.splice(i,1)
                }
                
            }
        }else{
            console.log(`${tokens[0]} is not in the list!`);
        }
    }
    
}
console.log(guestList.join('\n'));

}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);
