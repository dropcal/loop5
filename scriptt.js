// for(startingValue, conditio, steps(increase/descrese)) {
    // your code
// }

// for (let i=1; i<10; i--) {
//     console.log(i);  
// }
// for (let i=0; i<=100; i++) {
//     console.log(i);  
// }

// Count down from 100 to 0
// for(k=100; k>=0; k--) {
//     console.log(k); 
// }


// The i += 2 part increments the counter by 2 in each loop.
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i <= 100; i ++) {
//     if (i % 2 == 0) {
//         console.log(` ${i}this number is an even number`)
//     }
// }

for(let k=1; k<=100; k++){
    if(k%2==0) {
        // console.log(`${k} is an even number`);
        showResult.innerHTML += `<p style="color:blue;">${k} is an even number</p>`
    }
    else {
        // console.log(`${k} is an odd number`);  
        showResult.innerHTML += `<p style="color:red;">${k} is an odd number</p>`      
    }
}