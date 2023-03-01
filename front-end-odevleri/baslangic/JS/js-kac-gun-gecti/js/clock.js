// Receiving name info from user
let firstName = prompt("Size nasıl hitap edelim:")
firstName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}`
// Sending the name info to HTML
let welcome = document.querySelector("#myName")
welcome.innerHTML = firstName

console.log("deneme")

// Calculates the time since the  Kahramanmaras earthquake
function updatePassingTime(){
    // The time passed
    const kahramanmarasEarthquake = new Date('2023-02-06T04:17:00Z');
    let currentDate = new Date()
    let passingTime = currentDate.getTime() - kahramanmarasEarthquake.getTime()

    // Converting time
    let secondDifference = Math.floor(passingTime / 1000)
    let minuteDifference = Math.floor(secondDifference / 60)
    let hourDifference = Math.floor(minuteDifference / 60)
    let dayDifference = Math.floor(hourDifference / 24)

    // Sending the results to HTML
    let passingTimeText = `Depremin üzerinden ${dayDifference} gün, ${hourDifference % 24} saat, ${minuteDifference % 60} dakika ve ${secondDifference % 60} saniye geçti!`
    document.querySelector("#myClock").textContent = passingTimeText
}
setInterval(updatePassingTime, 1000)



