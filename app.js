//Linear Search
//Last Occurence

// arrSize = 5;
// arr = [1, 2, 3, 4, 1];
// Target = 1;
// function linearSearch(arr, Target) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === Target) {
//       let result = arr.lastIndexOf(Target);
//       return result + 1;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch(arr, Target));

// 4 2
// 1 3 2 2;

// Output = 4;

// 6 1
// 2 5 1 6 1 4

// Output = 5;

// 3 7
// 1 2 1

// Output = -1;

// N = 5;
// M = 1;
// arr = [1, 2, 3, 4, 1];

// function linearSearch(arr, M) {
//   for (let i = 0; i <= N; i++) {
//     if (arr[i] === M) {
//       let result = arr.lastIndexOf(M);
//       return result + 1;
//     }
//   }
//   return -1;
// }

// linearSearch(arr, M);

//-----------------------------------------------------------//

//Maximum Sum

// arr = [1, 2, -4, -2, 3];

// function maxSum(arr) {
//   let count = 0;
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       sum = Math.max(sum + arr[i]);
//     } else if (arr[i] < 0) {
//       count = sum;
//     }
//   }
//   return [sum, count];
// }

// let [sum, count] = maxSum(arr);
// console.log(sum, count);

//-------------------------------------------------------------//

// Rest in Peace

// Sample Input   Sample Output
// 3
// 120            The streak lives still in our heart!
// 121            The streak is broken!
// 231            The streak is broken!

//Logic
// t = 3;
// arr = [120,121,231]
// num % 21 === 0 ==> The streak is broken - done
// change string to number ==> The streak lives still in our heart -
// if 21 together then streak is broken - done
//arr[i] % 21 === 0
//(arr[i] + "").includes("21")

// arr = [120, 121, 231];

// function restInPeace(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 21 === 0 || (arr[i] + "").includes("21")) {
//       console.log("The streak is broken");
//     } else {
//       console.log("The streak lives still in our heart");
//     }
//   }
// }

// restInPeace(arr);

// function restInPeace(arr) {
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i] % 21 === 0) {
//         console.log("The streak is broken");
//       } else if ((arr[i] + "").includes("21")) {
//         console.log("The streak is broken");
//       } else {
//         console.log("The streak lives still in our heart");
//       }
//     }
//   }

//   restInPeace(arr);
