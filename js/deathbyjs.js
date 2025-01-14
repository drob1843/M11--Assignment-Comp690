//STEP 1

// function sortWord() {
//     let input


//     do {
//         input = prompt('Enter a word: ')

//         if (!input) {
//             alert('Please Enter a valid String')


//         }

//     } while (!input)

//     const sortedWord = input.split('').sort().join('')

//     console.log(`Example Sting: ${input}`)
//     console.log(`Example Output: ${sortedWord}`)

// }


// sortWord()


//STEP 2


// function capFirstLetter() {
//     let input

//     do {
//         input = prompt('Enter a sentence: ')

//         if (!input) {
//             alert('Please Enter a valid Sentence')
//         }
//     } while (!input)

//     const capWords = input
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//         .join(' ')

//     console.log(`Example Sting: ${input}`)
//     console.log(`Example Output: ${capWords}`)


// }


// capFirstLetter()


//STEP 3

// function vowelCounter() {

//     let input

//     do {
//         input = prompt('Enter a Sentence: ')

//         if (!input || input.trim() === '') {
//             alert('Try Again')
//         }
//     } while (!input || input.trim() === '')

//     const vowels = 'aeiouAEIOU'
//     let vowelCount = 0

//     for (let char of input) {
//         if (vowels.includes(char)) {
//             vowelCount++
//         }
//     }
//     console.log(`Number of Vowels: ${vowelCount}`);
    

// }

// vowelCounter()



//STEP 4
// function generateRandomID() {
//     let length

//     do {
//         const input = prompt('Enter the desired length for the random ID:')

//         length = parseInt(input, 10)

     
//         if (isNaN(length) || length <= 0) {
//             alert('Please enter a valid positive number.')
//         }
//     } while (isNaN(length) || length <= 0)

//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     let randomID = ''
 
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         randomID += characters[randomIndex]
//     }

//     console.log(`Generated Random ID: ${randomID}`)
// }


// generateRandomID()


//STEP 5
function findLongestCountry() {
    let input

    do {
        input = prompt('Enter a list of country names, separated by commas:')

        if (!input || input.trim() === '') {
            alert('Please enter a valid list of country names.')
        }
    } while (!input || input.trim() === '')

    const countries = input.split(',').map(country => country.trim())

  
    let longestCountry = countries.reduce((longest, current) => {
        return current.length > longest.length ? current : longest
    }, '');

    console.log(`Longest Country Name: ${longestCountry}`)
}


findLongestCountry();