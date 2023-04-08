// Code your solution in this file!
function distanceFromHqInBlocks(block){
    const headquarters = 42
    return Math.abs(block- headquarters);
}

function  distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264); 
}

function distanceTravelledInFeet(start, destination){
    let feet = Math.abs(destination-start);
    return feet*264;
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start,destination )
    if (distance <= 400) {
    return 0;}
    else if (distance >= 400 && distance <= 2000) {
    return Math.abs((distance - 400)*0.02);
    }
    else if (distance >= 2000 && distance <= 2500){
    return 25;
    }
    else if (distance > 2500) {
    return "cannot travel that far";
    }
}













