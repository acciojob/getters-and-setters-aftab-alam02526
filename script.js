// Complete this code
class Person {
	constructor(name, age) {
		this._name = name;  // Use _name
		this._age = age;    // Use _age
	}

	// Getter for name
	get newName() {
		return this._name;
	}

	// Setter for age
	set newAge(age) {
		this._age = age;
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

// Testing Person
const person = new Person("John", 25);
console.log(person._name); // John

person.newAge = 30; // Using setter
console.log(person._age); // 30

// Testing Student
const student = new Student("Alice", 22);
student.study(); // Alice is studying

// Testing Teacher
const teacher = new Teacher("Bob", 40);
teacher.teach(); // Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

