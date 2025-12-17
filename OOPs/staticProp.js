class User{
    constructor(username){
        this.username = username
     
    }
    signIn(){
        console.log(`${this.username} "logged in successfully"`);
        
    }
    static getId(){
        return `1111`

    }
}

     class Professor extends User{
        constructor(username, email, password){
        super(username)
        this.email= email
        this.password = password
        }
        addCourses(){
            console.log(`Courses has been added by ${this.username}`);
            
        }

     }

const logIn = new User("Manmeet", "mani@g.com", 1111)
logIn.signIn()
// console.log(logIn.getId())  : using of static keyword to limit the access

const course_added = new Professor("Manmeet", "mani@g.com", 1111)
course_added.addCourses()
