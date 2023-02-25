class Employee {
constructor(name,email,id){
this.name = name;
this.email = email;
this.id = id;
this.title = title;
}

getName() {
    return this.name;
}

getId() {
    return this.email;
}

getEmail() {
    return this.id;
} 

getRole() {
    return this.title;
}   
}
module.exports = Employee;