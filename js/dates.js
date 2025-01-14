//STEP 1

// function monthDays() {
//     const month = parseInt(prompt(`Enter a number between 1 and 12 (these will
//         coorespond to a month)`))
//     const year = parseInt(prompt(`Enter a year (e.g., 2025): `), 10)

//     if (isNaN(month) || month < 1 || month > 12) {

//         return alert('Please Enter a valid number between 1 and 12.')

//     }

//     if (isNaN(year) || year < 1) {

//         return alert('Please Enter a valid Year.')

//     }

//     const days = new Date(year, month, 0).getDate()
//     alert(`The month ${month} of the year ${year} has ${days} days`)
// }

// monthDays()

//STEP 2

// function month() {
//     let input = prompt('Enter a date (use the following format YYYY-MM-DD):')


//     while (true) {

//         const date = new Date(input)

//         if (!isNaN(date.getTime())) {


//             const monthNames = ["January", "February", "March", "April", "May", "June",
//                 "July", "August", "September", "October", "November", "December"]

//             const monthName = monthNames[date.getMonth()]

//             console.log(`The month for the entered date is: ${monthName}`);


//             break

//         } else {
//             alert('Please use the following format YYYY-MM-DD')

//         }

//         input = prompt('Enter a date (use the following format YYYY-MM-DD):')

//     }

// }

// month()

//STEP 3

// function isWeekend() {
//     let input = prompt('Enter a date (use the following format YYYY-MM-DD):')

//     while (true) {
//         const date = new Date(input)

//         if (!isNaN(date.getTime())) {
//             const weekday = date.getDay()

//             if (weekday === 0 || weekday === 6) {
//                 alert('The date falls on a weekend')
//             } else {
//                 alert('The date in not a weekend')
//             }

//             break
//         } else {
//             alert('Invalid date')
//         }

//         input = prompt('Enter a date (use the following format YYYY-MM-DD):')


//     }

// }

// isWeekend()

//STEP 4

// function isYesterday() {
//     const today = new Date()

//     const yesterday = new Date(today)

//     yesterday.setDate(today.getDate() - 1)

//     const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     const yesterdayName = weekdays[yesterday.getDay()]

//     console.log(`Yesterday was ${yesterdayName}`);
    
// }

// isYesterday()

//STEP 5
function getDayInitial() {
   
    const today = new Date()

 
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
    const todayName = weekdays[today.getDay()]

 
    const initial = todayName.charAt(0)

    console.log(`Today's initial is: ${initial}`)
}

getDayInitial();