const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('heyyyy');
        }
        else{
            reject('wooops');
        }
    });
}
anotherFunction()
.then(response => console.log(response))
.catch(err => console.error(err))
.finally(() => console.log('fianll'))