let datas = ["Initializing Hack tool.....",
        "Connecting to Facebook.....",
        "Connecting to server 1.....",
        "Connection failed. Retrying.....",
        "Connecting to server 2.....",
        "Connected Successfully.....",
        "Username willsforddavid16.....",
        "Trying Brute Force.....",
        "203K passwords tried.....",
        "Match not found.....",
        "Another 169K passwords tried.....",
        "Match not found.....",
        "Another 331K passwords tried.....",
        "Match not found.....",
        "Another 229K passwords tried.....",
        "Match found.....",
        "Accessing Account.....",
        "Hack Successful....."];
let message = document.querySelector('.message');

let getPromise = (secs)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },secs*1000);
    })
}

let setPromise = async (data) => {
    await getPromise(2);
    //console.log(data);
    message.innerHTML = message.innerHTML+ data + "<br />";
    message.classList.add('blink');
    if (data.includes("not found")){
        message.style.color = "crimson";
    }
    else {
        message.style.color = "chartreuse";
    }
}

let val;
(async () => {
    for (val in datas) {
        await setPromise(datas[val]);
    }
})();