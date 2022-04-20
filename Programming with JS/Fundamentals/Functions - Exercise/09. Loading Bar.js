function loadingBar (num){

    function fullFilled(myNym) {
    return myNym==100 
    }

    function pictureBar(ourNum){
        let percentageSignCount = ourNum/10;
        let resultArr=[];
        for (let index = 0; index < 10; index++) {
            if(index<percentageSignCount){
            resultArr.push("%");
            }else{
                resultArr.push(".");
            }
            
        }
        return `${ourNum}% [${resultArr.join('')}]`
    }

    let picture = pictureBar(num);
    let completed = fullFilled(num);
    
    if(completed){
        console.log('100% Complete!');
    }else{
        console.log(picture);
        console.log('Still loading...');
    }
}
loadingBar(30);
console.log('---------');
loadingBar(50);
console.log('---------');
loadingBar(100);