function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return someValue - 42
    } else if (someValue <= 42) {
        return 42 - someValue
    }
}

distanceFromHqInBlocks(43)

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue)*264
}

distanceFromHqInFeet(43)

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start)*264)
}

distanceTravelledInFeet(43, 48)

let distanceInFeet = Math.abs((destination - start)*264)

function calculatesFarePrice(start, destination) {
    if (Math.abs((destination - start)*264) <= 400) {
        return 0
        } else if (Math.abs((destination - start)*264) < 2000) {
            return (Math.abs((destination - start)*264)-400)*0.02
        } else if (Math.abs((destination - start)*264) > 2000) {
            if (Math.abs((destination - start)*264) > 2500) {
                return "cannot travel that far"
            }
            return 25
        }
}

calculatesFarePrice(43, 48)


