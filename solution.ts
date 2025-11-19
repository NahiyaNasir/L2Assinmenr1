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


const getLength = (value: string | number[]) => {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length;
  }
};


class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name:${this.name}, Age:${this.age}';`;
  }
}




type Items = {
  title: string;
  rating: number;
};
const filterByRating = (items: Items[]) => {
  return items.filter((it) => it.rating >= 4);
};



type User = {
  name: string;
  id: number;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]) => {
  return users.filter((user) => user.isActive === true);
};



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}


const printBookDetails = (myBook: Book) => {
  return `Title :${myBook.title} Author:${myBook.author} Published Year :${
    myBook.publishedYear
  } IsAvailable:${myBook.isAvailable ? "Yes" : "No"}`;
};


const getUniqueValues = <T extends string | number>(
  arr: T[],
  arr1: T[]
): T[] => {
    const result: T[] = [];
  function add(value: T) {
    if (result.indexOf(value) === -1) {
      result[result.length] = value; 
    }

  }

return   result;}
  

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (product: Product[]) => {
  const totalPrice = product.reduce((pre, p) => {
    const discount = p.discount ? p.discount / 100 : 0;
    const productCal = p.price * p.quantity * (1 - discount);
    return pre + productCal;
  }, 0);
  return totalPrice;
};

