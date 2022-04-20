function vacation(groupPeople, typeOfGroup, weekDay) {

    //	        Friday	        Saturday	        Sunday
    //  Students	8.45	    9.80	            10.46
    //  Business	10.90	    15.60	            16
    //  Regular	    15	        20	                22.50

    let totalStudentsPriceFriday = 8.45;
    let totalStudentsPriceSaturday = 9.8;
    let totalStudentsPriceSunday = 10.46;
    let totalBusinessPriceFriday = 10.9;
    let totalBusinessPriceSaturday = 15.6;
    let totalBusinessPriceSunday = 16;
    let totalRegularPriceFriday = 15;
    let totalRegularPriceSaturday = 20;
    let totalRegularPriceSunday = 22.5;
    let totalPrice = 0;


    if (groupPeople >= 100 && typeOfGroup === 'Business') {
        groupPeople -= 10;

    }

    if (weekDay === 'Friday') {

        if (typeOfGroup === 'Students') {
            if (groupPeople >= 30) {
                totalPrice = groupPeople * totalStudentsPriceFriday * 0.85;
            } else {
                totalPrice = groupPeople * totalStudentsPriceFriday;
            }

        } else if (typeOfGroup === 'Business') {
            totalPrice = groupPeople * totalBusinessPriceFriday;

        } else if (typeOfGroup === 'Regular') {

            if (groupPeople >= 10 && groupPeople <= 20) {
                totalPrice = totalRegularPriceFriday * groupPeople * 0.95;
            } else {
                totalPrice = totalRegularPriceFriday * groupPeople
            }
        }

    } else if (weekDay === 'Saturday') {

        if (typeOfGroup === 'Students') {
            if (groupPeople >= 30) {
                totalPrice = groupPeople * totalStudentsPriceSaturday * 0.85;
            } else {
                totalPrice = groupPeople * totalStudentsPriceSaturday;
            }

        } else if (typeOfGroup === 'Business') {
            totalPrice = groupPeople * totalBusinessPriceSaturday;

        } else if (typeOfGroup === 'Regular') {

            if (groupPeople >= 10 && groupPeople <= 20) {
                totalPrice = totalRegularPriceSaturday * groupPeople * 0.95;
            } else {
                totalPrice = totalRegularPriceSaturday * groupPeople
            }
        }
    } else if (weekDay === 'Sunday') {

        if (typeOfGroup === 'Students') {
            if (groupPeople >= 30) {
                totalPrice = groupPeople * totalStudentsPriceSunday * 0.85;
            } else {
                totalPrice = groupPeople * totalStudentsPriceSunday;
            }

        } else if (typeOfGroup === 'Business') {
            totalPrice = groupPeople * totalBusinessPriceSunday;

        } else if (typeOfGroup === 'Regular') {

            if (groupPeople >= 10 && groupPeople <= 20) {
                totalPrice = totalRegularPriceSunday * groupPeople * 0.95;
            } else {
                totalPrice = totalRegularPriceSunday * groupPeople;
            }
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(110, "Business", "Saturday");
//vacation(40, "Regular", "Saturday");
