var greetings = document.querySelector(".greet")

var timeDisplay = document.querySelector("#btn")

var todayDate = document.querySelector(".date1")

var userName = prompt("what is your name")


//getting date and time

let today = new Date()

let seconds = today.getSeconds()

let minutes = today.getMinutes()


let currentTime = today.getHours()

let date = today.getDate()

let month = today.getMonth() +1

let year = today.getFullYear()

let hour = currentTime

let clockTime = `${currentTime}:${minutes}:${seconds}`

let current_date = `${month}-${date}-${year}.`

todayDate.innerHTML = current_date

// clicking.addEventListener("click",function(){
//     // if(clicking){
//     //     greetings.innerHTML = "Good morning "
//     // }

   
// })

if (hour >= 6 && hour < 12)

greetings.innerHTML = "Good Morning " + userName 


else if(hour >=12 && hour < 13)
greetings.innerHTML = "It's Noon " + userName 


else if (hour >13 && hour < 20)
greetings.innerHTML = "Good evening " + userName 


else if (hour < 6)
greetings.innerHTML = "It's a new day!, How can we get you started " + userName 


else if(hour > 24 )
null

else
greetings.innerHTML = "Good night see you tomorrow " + userName 

timeDisplay.innerHTML = clockTime