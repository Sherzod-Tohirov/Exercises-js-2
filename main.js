// BIRINCHI MASALA 

// function addTotal(arr) {
//     return arr.reduce((total, item, index) => total += item * index, 0);
// }

// const arr = [1, 2, 3, 4, 5];

// let result = addTotal(arr);

// console.log(result);



// IKKINCHI MASALA 

// function toUpperFromLower(str) {
//     const lower = [];
//     const upper = [];

//     str.split('').forEach(item => {
        
//         if(item === item.toUpperCase()) {
//             upper.push(item);
//         }

//         if(item === item.toLowerCase()) {
//             lower.push(item);
//         }
//     });

//     return upper.concat(lower).join('');
// }

// let str = "hApPy";

// let result = toUpperFromLower(str);

// console.log(result);



// UCHINCHI MASALA 

// function reverseNumber(num) {
//     const reverseNum = String(num).split('').reverse().join('');
//     const str = reverseNum.concat(String(num));
//     if(str.length > 16) {
//         return BigInt(reverseNum.concat(String(num)));
//     }

//     return Number(reverseNum.concat(String(num)));

    
// }


// let num = 123;

// let result = reverseNumber(num);

// console.log(result);




// TO'RTINCHI MASALA 

// function oldest(obj) {
//     let oldest = "";
//     for(key in obj) {
//         if(oldest.length == 0) {
//             oldest = key;
//         }

//         if(obj[key] > obj[oldest]) {
//             oldest = key;
//         }

//     }

//     return oldest;
// }

// let obj = {
//     Max: 9,
//     Josh: 13,
//     Sam: 48,
//     Anne: 33
// }

// let result = oldest(obj);

// console.log(result); 



// BESHINCHI MASALA 


// function mapping(arr) {
//     const obj = {}

//     arr.map(item => {
//        obj[item] = item.toUpperCase();
//     });

//     return obj;

// }

// let arr = ["p", "s"];

// let result = mapping(arr);

// console.log(result);


// OLTINCHI MASALA 


// function parseCode(str) {
//     const arr = str.split('0').filter(item => item);
    
//     return {
//         firstName: arr[0],
//         lastName: arr[1],
//         id: arr[2]
//     }

// }

// let str = "John000Doe000123";

// let result = parseCode(str);

// console.log(result);


// YETTINCHI MASALA 


// function minMax(arr) {
//     const minVal = Math.min(...arr);
//     const maxVal = Math.max(...arr);

//     return [minVal, maxVal];
// }

// let arr = [1, 2, 3, 4, 5];

// let result = minMax(arr);

// console.log(result);