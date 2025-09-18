//complete this code
class Person {
	constructor(name, age){
		this._name = name;  // Use _name to match test
		this._age = age;    // Use _age to match test
	}

	// Getter for name
	get newName() {
		return this._name;
	}

	// Setter for age
	set newAge(age) {
		this._age = age;
	}

	// Getter for age (optional, but useful)
	get age() {
		return this._age;
	}

	// Setter for age (alternate access using direct property)
	set age(value) {
		this._age = value;
	}
}

class Student extends Person {
	study() {
		console.log(this._name + " is studying");
	}
}

class Teacher extends Person {
	teach() {
		console.log(this._name + " is teaching");
	}
}

// Creating a Person instance
const person = new Person("John", 25);
console.log(person._name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person._age);   // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

