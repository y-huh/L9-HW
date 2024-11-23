// extra-------------------
// const minMaxWord = (str) => {
//     const words = str.split(' ');

//     let minWord = words[0];
//     let maxWord = words[0];

//     for (let word of words) {
//         if (word.length < minWord.length) {
//             minWord = word;
//         }
//         if (word.length > maxWord.length) {
//             maxWord = word;
//         }
//     }

//     console.log({ minWord, maxWord });
// };

// minMaxWord("Men dasturlash kursida o'qiyman");


//1
// let products = [
//     { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
//     { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
//     { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
//     { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
// ];

// let updatedProducts = products.filter(product => product.id !== 4);
// console.log(updatedProducts);

//2
// let people = [
//     { name: "John", age: 13 },
//     { name: "Mark", age: 56 },
//     { name: "Rachel", age: 45 },
//     { name: "Nate", age: 67 },
//     { name: "Jeniffer", age: 65 },
//   ];
  
//   let minAge = people[0].age
//   let maxAge = people[0].age
  
//   people.forEach(person => {
//     if (person.age < minAge) minAge = person.age;
//     if (person.age > maxAge) maxAge = person.age;
//   });
  
//   let ageDifference = maxAge - minAge;
//   console.log(ageDifference);


//3
// function countCase(str) {
//     let uppercase = 0;
//     let lowercase = 0;
  
//     for (let char of str) {
//       if (char >= "A" && char <= "Z") uppercase++;
//       else if (char >= "a" && char <= "z") lowercase++;
//     }
  
//     return { uppercase, lowercase };
//   }
  
//   console.log(countCase("Hello World!"));
  
//4
// function evenOddIndexSums(arr) {
//     let evenIndexSum = 0;
//     let oddIndexSum = 0;
  
//     arr.forEach((num, index) => {
//       if (index % 2 === 0) {
//         evenIndexSum += num;
//       } else {
//         oddIndexSum += num;
//       }
//     });
  
//     return { evenIndexSum, oddIndexSum };
//   }
  
//   console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6]));
  

//5


//6
// function removeSpaces(str) {
//     let result = "";
//     for (let char of str) {
//       if (char !== " ") result += char;
//     }
//     return result;
//   }
  
//   console.log(removeSpaces("Hello World! How are you?"));

//7
// function areAnagrams(str1, str2) {
//     let sorted1 = str1.split("").sort().join("");
//     let sorted2 = str2.split("").sort().join("");
//     return sorted1 === sorted2;
//   }
  
//   console.log(areAnagrams("listen", "silent"));
//   console.log(areAnagrams("hello", "world"));
  

//8
// function mostFrequentElement(arr) {
//     let frequency = {};
//     let maxFreq = 0;
//     let mostFrequent = null;
  
//     arr.forEach(num => {
//       frequency[num] = (frequency[num] || 0) + 1;
//       if (frequency[num] > maxFreq) {
//         maxFreq = frequency[num];
//         mostFrequent = num;
//       }
//     });
  
//     return mostFrequent;
//   }
  
//   console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1]));
  

//9
// function sumOfDigits(str) {
//     let sum = 0;
  
//     for (let char of str) {
//       if (char >= "0" && char <= "9") {
//         sum += char - "0";
//       }
//     }
  
//     return sum;
//   }
  
//   console.log(sumOfDigits("abc123def45")); // 15
  

//10
// function letterFrequency(str) {
//     let frequency = {};
  
//     for (let char of str) {
//       if (char !== " ") {
//         frequency[char] = (frequency[char] || 0) + 1;
//       }
//     }
  
//     return frequency;
//   }
  
//   console.log(letterFrequency("hello world"));
  