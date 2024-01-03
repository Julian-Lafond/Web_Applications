console.log("Hello");


let randomMessage = (arr) =>{
    for (let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const arr = [["Hello my name is Julian"], ["I love surfing"], ["I love tennis"], ["I like soccer"], ["I like reading"]];

randomMessage(arr);
const randomIterations = arr.slice(0, 3);
console.log(randomIterations)