const uniqueArray = (arr)=>{
    const uniqueArr = [];

    arr.forEach(el => {
        if(!uniqueArr.includes(el)){
            uniqueArr.push(el);
        }
    });

    return uniqueArr
}

console.log(uniqueArray([1 , 1 ,2 ,3]));


// const users = [
//     {
//         id: 1 ,
//         name : "jack",
//         isActive : true,
//         age : 30
//     },
//     {
//         id: 2 ,
//         name : "dave",
//         isActive : true,
//         age : 24
//     },
//     {
//         id: 3 ,
//         name : "bekalu",
//         isActive : false,
//         age : 28
//     }
// ]

// const isNameExists = ( users ,name)=> users.find(el => el.name === name)

// console.log(isNameExists(users , "dave"));

// const addElement = (arr1 , arr2)=>{
//      return [...arr1 , ...arr2 ];
// }

// console.log(addElement(['dave', 'leul' ] , ["china"]));


// const multiply = (num1)=>{
//     return (num2) => num1* num2;
// }

// console.log("currying function : " , multiply(4))

// const multiply = (num1 , num2)=>{
//     return num1 * num2
// }

// console.log("multiply function : " , multiply(4))

// const users = [
//     {
//         id: 1 ,
//         name : "jack",
//         isActive : true,
//         age : 30
//     },
//     {
//         id: 2 ,
//         name : "dave",
//         isActive : true,
//         age : 24
//     },
//     {
//         id: 3 ,
//         name : "bekalu",
//         isActive : false,
//         age : 28
//     }
// ]

// console.log(users.map(user => user.name))

// const sortUsers = users.sort((usr1 , usr2) => (usr1.age < usr2.age ? 1 : -1 )).map(user => user.name)
// console.log("sorted users : " , sortUsers)
// // const commonStringFinder = arr => {
//     const commonStrings = {};

//     arr.forEach(str => {
//         if(commonStrings[str] === undefined) {
//             commonStrings[str] = 1;
//         }else {
//             commonStrings[str]++;
//         }

//     });

//     let maxEntry;
//     let maxValue = 0;

//     for(comString in commonStrings){
//         console.log(comString)
//         if(commonStrings[comString] > maxValue){
//             maxEntry = comString
//             maxValue = comString
//         }
//     }

//     return maxEntry;
// }

// console.log(commonStringFinder(['d' , 'a' , 'd' , 'b']));
