// // let x = "5"
// // let y = "7"

// // //console.log(x+y)
// // // console.log(x++)
// // let result = `the result is ${x} and ${y}`
// // console.log(result)

// let a = `hellossss`
// console.log(a[2,6])
// let var1 = 5, var2 = 5;

// // 5 is displayed
// // Then, var1 is increased to 6
// console.log(var1++)
// console.log(var1)
// // var2 is increased to 6
// // Then, var2 is displayed
// // console.log(++var2)

// const text1 = 'hello';
// const text2 = 'world';
// const text3 = '     JavaScript    ';

// // concatenating two strings
// const result1 = text1.concat(' ', text2);
// console.log(result1); // "hello world"

// // converting the text to uppercase
// const result2 = text1.toUpperCase();
// console.log(result2); // HELLO

// // removing whitespace from the string
// const result3 = text3.trim();
// console.log(result3); // JavaScript

// // converting the string to an array
// const result4 = text1.split();
// console.log(result4); // ["hello"]

// // slicing the string
// const result5= text1.slice(1, 3);
// console.log(result5); // "el"

// let a = 'JavaScript';

// a += ' tutorial';  // a = a + ' tutorial';
// console.log(a);


// // let dailyActivities = ['sleep', 'work', 'exercise']
// let newRoutine = ['eat'];
// let ages = [4, 9, 16, 25, 36, 49];

// // sorting elements in the alphabetical order
// dailyActivities.sort();
// console.log(dailyActivities); // ['exercise', 'sleep', 'work']

// dailyActivities.sort().reverse()
// console.log(dailyActivities) 

// ages.sort()
// console.log(ages)

// //finding the index position of string
// const position = dailyActivities.indexOf('work');
// console.log(position); // 2



// // slicing the array elements
// let dailyActivities = ['sleep', 'work', 'exercise']
// const newDailyActivities = dailyActivities.slice(2);
// console.log(newDailyActivities); // [ 'sleep', 'work']

// // concatenating two arrays
// const routine = dailyActivities.concat(newRoutine);
// console.log(routine); // ["exercise", "sleep", "work", "eat"]

// // filter an array
// const adults = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(adults); // [25, 36, 49]

// //map a function to an array
// let ages = [4, 9, 16, 25, 36, 49];
// const ages_sqrt = ages.map(Math.sqrt)
// console.log(ages_sqrt); // [2, 3, 4, 5, 6, 7]
