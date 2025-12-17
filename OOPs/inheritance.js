class User{
    constructor(username){
        this.username = username
     
    }
    signIn(){
        console.log(`${this.username} "logged in successfully"`);
        
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

const course_added = new Professor("Manmeet", "mani@g.com", 1111)
course_added.addCourses()


console.log(logIn === course_added);
console.log(logIn === User);
console.log(Professor === User);
console.log(course_added instanceof Professor);
console.log(logIn instanceof User);

