// const name = 'juju la'
// function toUpper(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }
// toUpper(name);
// const sum = function (num1 , num2){
//     const sum = num1 + num2
//  return sum

// }
// console.log(
//     sum(5,10)+3
// );

// const greet = function (name) {
//     console.log('hello'+' '+ name);

// }
// console.log(
//     greet ('juju')
// );
// const counterSpecialChar = function (str , special) {
//     let count = 0
//     for (let i = 0;str[i]; i++) {
//         for (let j = 0;special[j]; j++) {
//           if (str[i]== special[j]) {
//               count ++
//           }
            
//         }
       
        
//     }
//     return count;
    
// }
// const str = 'lyugf875r76if5c4wc3lioi8b7b84r6x6iu'
// const special = '8'
// console.log(counterSpecialChar (str , special));


const factorial = function (num) {
    let result=1
    for (let i = num; i >1; i--) {
      result = result *1
        
    }
    return result
}

const str = 'apple #car# key '
const findKey = function (str , value) {
    let key = " "
    let isReadingKey = false
    for (let i = 0; i < str.length; i++) {
       if (str[i] == '#') {
        isReadingKey = !isReadingKey
       }
        if (isReadingKey && str[i]!='#') {
            key += str[i]
        }
    }
    return key
}
console.log(
    findKey(str)
);

const replaceKey = function (str , value) {
}
replaceKey(str ,'meow')