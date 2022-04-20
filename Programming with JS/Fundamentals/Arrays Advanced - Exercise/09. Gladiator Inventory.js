function gladiatorInventory(input) {
  let inventory = input.shift().split(" ");

  for (let token of input) {
    token = token.split(" ");
    let action = token.shift();
    let item = token.shift();
    if (action == "Buy") {
      if (!inventory.includes(item)) {
        inventory.push(item);
      }
    }else if (action == 'Trash') {
        if (inventory.includes(item)) {
            let indexToRemove = inventory.indexOf(item);
            inventory.splice(indexToRemove,1);
            
        }
    }else if (action == 'Repair') {
        if (inventory.includes(item)) {
            let indexToRemove = inventory.indexOf(item);
            inventory.splice(indexToRemove,1);
            inventory.push(item);
        }
    }else if (action == 'Upgrade') {
        item = item.split('-');
        
        if (inventory.includes(item[0])) {
            let indexToAddTo = inventory.indexOf(item[0]);
            item=item.join(':');
           inventory.splice(indexToAddTo+1,0,item)
             
        }
    }
  }
  console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

);
