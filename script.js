// Complete this code
class Person {
	constructor(name, age) {
		this._name = name;  // Internal storage
		this._age = age;    // Internal storage
	}

	// Public getter for name (Cypress expects person.name to work)
	get name() {
		return this._name;
	}

	// Public getter for age
	get age() {
		return this._age;
	}

	// Public setter for age
	set age(value) {
		this._age = value;
	}

	// Optional custom getter for newName (not used by test but kept for extra feature)
	get newName() {
		return this._name;
	}

	// Optional custom setter for newAge
	set newAge(value) {
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
console.log(person.name);  // Output: John

person.age = 30;  // Using setter to change the age
console.log(person.age);   // Output: 30

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


