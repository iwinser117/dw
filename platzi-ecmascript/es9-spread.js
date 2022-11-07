const users = {
    username :'iwinser',
    age : 27,
    country : 'BG'
}
const {username, ...values} = users;
console.log(users)
console.log(username)
console.log(values)
console.log(users)