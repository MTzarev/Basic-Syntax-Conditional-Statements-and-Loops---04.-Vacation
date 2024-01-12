function vacation (numbers, typeG, dayT){

if (typeG === "Students" && dayT === "Friday"){
    if (numbers>=30){
        console.log (`Total price: ${(numbers*8.45*0.85).toFixed(2)}`)
    }else{
        console.log (`Total price: ${(numbers*8.45).toFixed(2)}`)
    }
}else if (typeG === "Students" && dayT === "Saturday"){
    if (numbers>=30){
        console.log (`Total price: ${(numbers*9.80*0.85).toFixed(2)}`)
    }else{
        console.log (`Total price: ${(numbers*9.80).toFixed(2)}`)
    }
}else if (typeG === "Students" && dayT === "Sunday"){
    if (numbers>=30){
        console.log (`Total price: ${(numbers*10.46*0.85).toFixed(2)}`)
    }else{
        console.log (`Total price: ${(numbers*10.46).toFixed(2)}`)
    }
}
if (typeG === "Business" && dayT === "Friday"){
     if (numbers>=100){
        console.log (`Total price: ${((numbers-10)*10.90).toFixed(2)}`)
    }else{
        console.log (`Total price: ${(numbers*10.90).toFixed(2)}`)
    }
}else if (typeG === "Business" && dayT === "Saturday"){
    if (numbers>=100){
        console.log (`Total price: ${((numbers-10)*15.60).toFixed(2)}`)
    }else{
        console.log (`Total price: ${(numbers*15.60).toFixed(2)}`)
    }
}else if (typeG === "Business" && dayT === "Sunday"){
    if (numbers>=100){
        console.log (`Total price: ${((numbers-10)*16).toFixed(2)}`)
    }else{
        console.log (`Total price: ${(numbers*16).toFixed(2)}`)
    }
}
if (typeG === "Regular" && dayT === "Friday"){
    if (numbers>=10 && numbers<=20){
        console.log (`Total price: ${(numbers*15*0.95).toFixed(2)}`)
    }else{
        console.log (`Total price: ${(numbers*15).toFixed(2)}`)
    }
}else if (typeG === "Regular" && dayT === "Saturday"){
    if (numbers>=10 && numbers<=20){
        console.log (`Total price: ${(numbers*20*0.95).toFixed(2)}`)
    }else{
        console.log (`Total price: ${(numbers*20).toFixed(2)}`)
    }
}else if (typeG === "Regular" && dayT === "Sunday"){
    if (numbers>=10 && numbers<=20){
        console.log (`Total price: ${(numbers*22.50*0.95).toFixed(2)}`)
    }else{
        console.log (`Total price: ${(numbers*22.50).toFixed(2)}`)
    }
}
}
vacation(40,"Regular","Saturday")

/*You are given a group of people, the type of the group, and the day of the week they are going to stay.
 Based on that information calculate how much they have to pay and print that price on the console. U
 se the table below. In each cell is the price for a single person. 
The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.*/

