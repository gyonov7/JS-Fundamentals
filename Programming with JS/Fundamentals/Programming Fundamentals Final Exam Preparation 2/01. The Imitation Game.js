function imitationGame(input) {

    let word = input.shift();

    while(input[0]!='Decode'){
        let line = input.shift().split('|');
        let command = line[0];
        let p1 = line[1];
        let p2 = line[2];

        if(command=='ChangeAll'){
        word = word.split(p1).join(p2);
        
        }else if(command== 'Insert'){
            let left = word.substring(0,p1);
            let right = word.substring(p1);
            word = left+p2+right;
        
        }else if(command=='Move'){
            let end = word.substring(0,p1);
            let start = word.substring(p1);
            word = start+end;
            
        }
    }
    console.log(`The decrypted message is: ${word}`);
}

imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
