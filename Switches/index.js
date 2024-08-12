/*let day = 5;
switch (day) {
    case 1:
            console.log(`its monday`)        
        break;
    case 2:
            console.log(`its tuesday`)        
        break;
     case 3:
            console.log(`its wednesday`)        
        break;
     case 4:
            console.log(`its thursday`)      
        break;
     case 5:
            console.log(`its friday`)       
        break;
     case 6:
            console.log(`its Saturday`)        
        break;
     case 7:
            console.log(`its Sunday`)        
        break;

    default:
        console.log(`${day} is not a Day`)
        break;
}*/

let testScore = 92;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
        break;
}

console.log(letterGrade)