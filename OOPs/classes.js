class _user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password

    }
    securePassword(){
        return `the password is ${this.password}`
    }

    change_username(){
        return `change into upperCase: ${this.username.toUpperCase()}`
    }


}


 const new_const = new _user("mani", "mani@g.com", 1111)
 console.log(new_const)
 console.log(new_const.securePassword())

 const new_cont = new _user("mani", "mani@g.com", 1111)
 console.log(new_cont.change_username());
 


//  Without using class or constructor we use functions

function SetUserName(username){
    this.username = username
}
// console.log("username called")

function createUserIdentity(name, email, IdNumber){
    // SetUserName.call(this,name)--> here this keyword is used to call above function SetUserName
    SetUserName.call(this,name)
    this.email = email
    this.IdNumber = IdNumber

}
createUserIdentity.prototype.securePassword = function(){
    return `upper case : ${this.username.toUpperCase()}`
}

const call = new createUserIdentity("Manmeet", "manmeet@gmail.com", 19)
console.log(call.securePassword())


