export function getDate(dateArray) {
    let formattedDates = ""
    for (let i = 0; i < dateArray.length; i++) {
        const element = dateArray[i];
        formattedDates += convertDate(element) + ", "
    }
    let returnString = formattedDates.substring(0, formattedDates.length - 2)
    return returnString
}

function convertDate(dateNum) {
    switch (dateNum) {
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
        default: return "All seasons"
    }
}

export function capitalizeWords(resourceName) {
    let wordArray = resourceName.split(" ")
    let capitalizeArray = wordArray.map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    })
    return capitalizeArray.join(" ")
}

export function tConvert(hours) {
    var AmOrPm = hours >= 12 ? 'pm' : 'am';
    hours = (hours % 12) || 12;
    var finalTime = hours + ":00 " + AmOrPm;
    return finalTime
}

export function convertGender(gender) {
    if (gender === "Male") {
        return "man"
    }
    else {
        return "woman"
    }
}