/* 
Output: 
['Hello Suzi Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
     // just map over them to make a greeting
    return customers.map(({ first_name, last_name }) => `Hello ${first_name} ${last_name}!`);
}

/* 
Output: 
['Hello Suzi Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    // const overSixty = customers.filter(customer => customer.age > 60);
    return customers
        .filter(customer => customer.age > 60)
        .map(({ first_name, last_name }) => `Hello ${first_name} ${last_name}!`);
        // first, filter over the user to get the ones over 60
        // then map over them to make a greeting
}


/* 
Output: 
4532
*/

export function addAllAges(customers) {
    // reduce through the customers to make a sum
    return customers.reduce((acc, customer) => {

        return acc + customer.age;
    }, 0);
}

/* 
Output: 
4.5
*/

export function getAverageCoolFactor(customers) {
    // map through to make an array of cool factors
    // then reduce through that array to get a sum
    // then divide by the total number of customers
    const customerArray = customers.map(({ cool_factor }) => `${cool_factor}`);
    const customerNumber = customerArray.length;

    return customers
        // .map(({ cool_factor }) => `${cool_factor}`)
        .reduce((acc, customer) => { 
        
            return acc + (customer.cool_factor / customerNumber);

        }, 0);
            // return totalCF / customerNumber;

}

/* 
Output: 
{
    female: 42,
    male: 39,
    nonbinary: 8,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
    return customers.reduce((acc, customer) => {
        if(acc[customer.gender]) {
            acc[customer.gender]++;
        } else {
            acc[customer.gender] = 1;
        }

        return acc;
    }, {});
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
    return customers
        .filter(customer => customer.car_make === 'Ford')
        .reduce((acc, customer) => {
            if(acc[customer.gender]) {
                acc[customer.gender]++;
            } else {
                acc[customer.gender] = 1;
            }

            return acc;
        }, {});
}

/* 
Output: 
{
    ford: {
        female: 3,
        male: 6,
        nonbinary: 0,
    },
    mercedes:  {
        female: 5,
        male: 4,
        nonbinary: 1,
    },
    etc . . .
}
*/


// first need to break customers into car_make blocks: ford, GMC, etc.
// for each block reduce through to find gender breakdown

export function getGenderBreakdownOfEachCar(customers) {

    const carMakeBreakdown = customers.reduce((acc, customer) => {
        if(!acc[customer.car_make]) {
            acc[customer.car_make] = customers
                .filter((filteredCustomer) => customer.car_make === filteredCustomer.car_make)
                .reduce((acc, customer) => {
                    if(!acc[customer.gender]) {
                        acc[customer.gender] = 1;
                    } else {
                        acc[customer.gender]++;
                    }
                    return acc;
                }, {});
        }
        return acc;
    }, {});
    return carMakeBreakdown;
}
    
    // const carMakeMap = customers.reduce(
    //     (acc, customer) => {
    //         if(customer.car_make) {
    //             if(!customer.car_make) {
    //                 customer.car_make = [];
    //             }
    //             customer.car_make.push(customer);
    //         }
    //     }
    // );

    // const genderBreakdown = Object  
    //     .keys(carMakeMap)
    //     .reduce((acc, customerKey) => {
    //         if(acc[customerKey.gender]) {
    //             acc[customerKey.gender]++;
    //         } else {
    //             acc[customerKey.gender] = 1;
    //         }


    //         return genderBreakdown;

    //     }, {});}

//////////////////////////////////


        // // .map(customer => customer.car_make)
        // .map(({ car_make }) => `${car_make}`)
        // .reduce((acc, customer) => {
        //     if(acc[customer.gender]) {
        //         acc[customer.gender]++;
        //     } else {
        //         acc[customer.gender] = 1;
        //     }

        //     return acc;
        // }, {});

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/

// first need to break customers into car_make blocks: ford, GMC, etc.
// for each block create an array of all the cool factors
export function getAllCoolFactorsOfEachCar(customers) {
    return customers.reduce((acc, customer) => {
        if(!acc[customer.car_make]) {
            acc[customer.car_make] = [customer.cool_factor];
        } else {
            acc[customer.car_make].push(customer.cool_factor);
        }
        return acc;
    }, {});
}

// const carMakeBreakdown = customers.reduce((acc, customer) => {
//     if(!acc[customer.car_make]) {
//         acc[customer.car_make] = customers
//             .filter((filteredCustomer) => customer.car_make === filteredCustomer.car_make)
//             .map(({ cool_factor }) => `${cool_factor}`);
//         return acc;
//     }
// });
// return carMakeBreakdown;

/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////


/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
    const avgCoolFactor = customers.reduce((acc, customer) => {
        if(!acc[customer.car_make]) {
            acc[customer.car_make] = customers
                .filter((customer) => customer.car_make === customer.car_make)
                .reduce((acc2, customer2, index) => {
                    acc2 = acc2 + customer2.cool_factor;
                    return acc2;
                }, 0) / (customers.filter((customer) => customer.car_make === customer.car_make).length);
        }
        return acc;
    }, {});
    return avgCoolFactor;
}
            
            
            
            
//             [customer.cool_factor];
//         } else {
//             acc[customer.car_make].push(customer.cool_factor);
//         }
//         return acc;
//     });
// }

// const customerArray = customers.map(({ cool_factor }) => `${cool_factor}`);
// const customerNumber = customerArray.length;

// return acc + (customer.cool_factor / customerNumber);


// return customers.reduce((acc, customer) => {

//     return acc + customer.age;
// }, 0);



/* 
Output: 
// break the customers into age demographic blocks. 
// For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20: 38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {

    const ageBucketMap = customers.reduce(
        (acc, customer) => {
            if(customer.age >0 && customer.age < 11) {
                if(!acc.10) {
                    acc.10 = []
                };
                acc.10.push(customer)
            }
        },
    )
}

/* 
Output: 
// break the customers into age blocks. 
// For example, this lists out every cool factor for users aged between 1 and 10, then every cool factor for users aged between 21 and 30, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
    return true;
}


/* 
Output: 
// break the customers into age demographic blocks, and give the average cool factor for every age block. 
// For example, below, the average cool factor for users aged between 31-40 is 9.5.

{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
    return true;
}

