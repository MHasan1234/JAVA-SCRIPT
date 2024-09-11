// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("yellow", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("orange", 1000, () => {
//                changeColor("blue", 1000);
//             });
//         });
//     });
// });

// callback nesting -> callback hell

//  accepting data if ample internet is available
function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4){
        success();
    } else {
        failure();
    }
}

savetoDb( "Mushir",
    () => {
        console.log("success, your data was saved");
        savetoDb( "Hassan",
            () => {
            console.log("success2, your data2 was saved");
            savetoDb( "Umar",
            () => {
                console.log("success3, your data3 was saved");
            },
            () => {
                console.log("weak internet3, your data was not saved");
            }
        );
      },
            () => {
                console.log("weak internet2, your data cannot be saved");
            },
        
        );
        
    },
    () => {
        console.log("weak internet, your data cannot be saved");
    }
);    

// MAKING IT WITH THE USE OF PROMISES

function savetoDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

savetoDb("Mushir")
.then(() => {
    console.log("data1 saved");
    return savetoDb("helloworld");
})
.then(() => {
    console.log("data2 saved");
    return savetoDb("Hassan");
})
.then(() => {
    console.log("data3 saved");
})
.catch(() => {
    console.log("promise was rejected");
});
// savetoDb("Hello World");
