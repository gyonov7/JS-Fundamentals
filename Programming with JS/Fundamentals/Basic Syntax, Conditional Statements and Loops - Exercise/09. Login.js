function login(input) {

    let userName = input[0];

    let password = userName.split('').reverse().join('');

    let badCounter = 0;

    for (let i = 1; i < input.length; i++) {
        
        if (input[i] !== password) {

            if(badCounter<3){
            console.log(`Incorrect password. Try again.`);
            badCounter++;
            }else  {
                console.log(`User ${userName} blocked!`);
                break;
            }
        }else{
            console.log(`User ${userName} logged in.`);
        }

        

    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
//login(['sunny','rainy','cloudy','sunny','not sunny']);