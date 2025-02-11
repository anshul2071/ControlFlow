


//                                        //--------- Control Flow------------//



//  // --------IF ELSE CASE--------
//   // if else case for grade checking 
//   // minimum grade is B+ lower than that student fails for this condtion
  

//  let score = prompt("Enter the score");
//  if(score!= Number && score >100){
//     alert("Invalid input");
//  }
 
// else {
//   if (score >= 90 && score <= 99) {
//      console.log("Grade A+");
// } 
//  else if (score >= 80 && score <= 89) {
//      console.log("Grade A");
//  } 
//  else if (score >= 70 && score <= 79) {
//      console.log("Grade B+");
//  }
//   else {
//      console.log("Fail");
//  }
 
// }







//     //-----------For Loop-----------------//

// for(let i=0; i<=5; i++){
//     console.log(`Value = ${i}`);
    
    
// }



// const books = [
//     "To Kill a Mockingbird", 
//     "1984", 
//     "Moby Dick", 
//     "The Great Gatsby", 
//     "Pride and Prejudice", 
//     "The Catcher in the Rye", 
//     "The Hobbit", 
//     "Harry Potter and the Sorcerer's Stone", 
//     "The Lord of the Rings", 
//     "Crime and Punishment", 
//     "War and Peace", 
//     "The Diary of a Young Girl", 
//     "Animal Farm", 
//     "Brave New World", 
//     "The Alchemist"
// ];


// for(let i =0; i<books.length; i++){
//     console.log(`Book Name:  ${books[i]}`)
// }


//--------While Loop-----------//

//print even no from 0 to 10//
// let i = 0;

// while(i<=10){
//     console.log(`value = ${i}`);
//     i +=2;
// }


// //--------do While loop --------//
// let guess;
// const correctNum = 5;

// do {
//     guess = Number(prompt("Enter Your Guess"))
// }
// while(guess!= correctNum);

// console.log("Correct Guess");


 // // -----Switch Operation---- //

// const num1 = Number(prompt("Enter the number: "));
// const operators = prompt("Enter Operation to perform (+,*,/,-):");
// const num2 = Number(prompt("Enter the number: "));

// let result;


// switch(operators){
//     case "+":
//         result = num1 + num2;
//         break;

//     case "-":
//         result = num1-num2;
//         break;

//     case "*":
//         result = num1*num2;
//         break;

//     case "/":
//         if (num2 !== 0){
//             result = num1/num2;
//         }
//         else {
//             result = "Error: Division by zero is not allowed";
//             alert("not allowed")
//         }

//         break;

//     default:
//         result = alert("Invalid opertators");
    
// }

// console.log(`Result : ${result}`)





// //----------break------------///

// for(let i = 0; i<=10; i++){
//     if(i==7){
        
//         console.log(`Total Numbers: ${i}`);
//         break;
//     }
//     console.log(i)
    
//    }

//----------continue--------------//

for(let num=0; num<=10; num++){
    if(num%2==0){
        continue;
    }
    console.log(`Result: ${num}`);
}