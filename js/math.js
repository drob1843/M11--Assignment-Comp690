//STEP 1
// function positive() {
//     const num = parseFloat(prompt('Enter any number, positive or negative: '))

//     console.log(`The positive value of ${num} is ${Math.abs(num)}`);

// }

// positive()
//STEP 2

// function decRounding() {
//     const num = parseFloat(prompt('Enter a number that is a decimal: '))

//     const roudedUp = Math.ceil(num)

//     console.log(roudedUp);

// }

// decRounding()

//STEP 3

// function decRoundDown() {
//     const num = parseFloat(prompt('Enter a number that is a decimal: '))

//     const roudedDown = Math.floor(num)

//     console.log(roudedDown);

// }

// decRoundDown()


//STEP 4

// function findValues() {
//     const selection = prompt('Enter 5 numbers separated by commas (e.g., 1,2,3,4,5)')
//     const num = selection.split(',').map(Number)

//     const small = Math.min(...num)
//     const big = Math.max(...num)

//     console.log(small)
//     console.log(big)



// }
// findValues()

//STEP 5

// function square() {


//     let num

//     do {
//         const input = prompt('Enter a positive number')
//         num = parseFloat(input)
        
//         if (isNaN(num) || num < 0) {
//             alert('Please enter a positive number. ')
//         }
//     } while (isNaN(num) || num < 0)


//     const squareRoot = Math.sqrt(num)

//     console.log(squareRoot);

// }


// square()
