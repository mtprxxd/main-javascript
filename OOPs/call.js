function SetUserName(username){
    this.username = username
}
console.log("username called")

function createUserIdentity(name, email, IdNumber){
    // SetUserName.call(this,name)--> here this keyword is used to call above function SetUserName
    SetUserName.call(this,name)
    this.email = email
    this.IdNumber = IdNumber
}

const call = new createUserIdentity("Manmeet", "manmeet@gmail.com", 19)
console.log(call)