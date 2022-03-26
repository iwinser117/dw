let promiseTest = (x) => {

    let flag = true;
    while(flag){
        flag = x == 1;
        return  new Promise((resolve, reject)=>{
            resolve("No necesito validaciones.")
            setTimeout(() => console.log("hola"), 3000)
        });
    }
    return console.log("Exception");
}

let promise = promiseTest(2)
promise.then((successMessage)=>{
    console.log("Paso por aqui.")
}).catch((err)=>{
    console.log("Exception " + err)
})

promiseTest()

