//STEP 1
// function getNameLength() {
//     const name = prompt('Enter your name:')
//     const nameLength = name.length

//     alert(`${name} has ${nameLength} characters.`)

// }

// getNameLength()
//STEP 2

// function displayLetter() {
//     const name = prompt('Enter your name: ')
//     let dig

//     do {
//         dig = parseInt(prompt(`Enter a number between 1 and ${name.length}`), 10)

//         if (isNaN(dig) || dig < 1 || dig >= name.length) {
//             alert(`Choose a number between 1 and ${name.length}`)
//         }
//     } while (isNaN(dig) || dig < 1 || dig >= name.length)

//     const corrLetter = name[dig - 1]

//     alert(`${corrLetter} is in the ${dig} position of ${name}`)
// }


// displayLetter()

//STEP 3

// function concNames () {
//     const firstName = prompt(`Enter your First Name`)
//     const lastName = prompt(`Enter your Last Name.`)

//     alert(firstName.concat(' ', lastName))
// }

// concNames()

//STEP 4

// function findFox() {
//     const text = 'The quick brown fox jumps over the lazy dog'

//     const findWord = text.indexOf('fox')

//     alert(`Index of the word 'fox' is: ${findWord}`)
// }

// findFox()

//STEP 5

// function findLastFox() {
//     const text = 'The quick brown fox jumps over the lazy fox'

//     const lastWord = text.lastIndexOf('fox')

//     alert(`The last index of the word 'fox' is: ${lastWord}`)
// }

// findLastFox()


//STEP 6
// function replaceDog() {
//     const text = 'The quick brown fox jumps over the lazy dog'

//     const yourName = prompt(`Enter your name: `)

//     const replacedText = text.replace('dog', yourName)

//     alert(replacedText)
// }

// replaceDog()



//STEP 7

// function wordSearch() {
//     const text = 'The quick brown fox jumps over the lazy dog'

//     const search = prompt(`Pick a work from the following sentence: '${text}'. `)

//     const found = text.toLowerCase().includes(search.toLowerCase())

//     if (found) {
//         alert(`The word '${search}' was found in the sentence`)
//     } else {
//         alert(`The word '${search}' was not found in the sentence`)
//     }
// }

// wordSearch()

//STEP 8

// function capitalize() {
//     const text = 'The quick brown fox jumps over the lazy fox'

//     const pull = text.slice(31).toUpperCase()

//     alert(pull)
// }

// capitalize()

//STEP 9

// function lowercase() {
//     const text = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'

//     const convert = text.trim().toLowerCase()

//     alert(convert)
// }

// lowercase()

//STEP 10

// function capFirstLetter() {
//     const text = 'the quick brown fox jumps over the lazy dog'

//     const capital = text.charAt(0).toUpperCase() + text.slice(1)

//     alert(capital)
// }

// capFirstLetter()