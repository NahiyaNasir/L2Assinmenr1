const formatValue = (a: string | number | boolean) => {
  if (typeof a === "string") {
    return a.toUpperCase();
  }
  if (typeof a === "number") {
    return a * 10;
  }
  if (typeof a === "boolean") {
    return !a;
  }
};

// 2
const getLength = (value: string | number[]) => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
};

// 3
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails():string {
    return `'Name:${this.name} Age:${this.age}'`;
  }
}
const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



 
 const getUniqueValues=(arr:number[],arr2:number[])=>{
     
 }
    
 
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (myBook: Book) => {
  console.log(
    `Title :${myBook.title} Author:${myBook.author} Published Year :${
      myBook.publishedYear
    } IsAvailable:${myBook.isAvailable ? "Yes" : "No"}`
  );
};
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};
printBookDetails(myBook);
