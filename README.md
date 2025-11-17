 # Blog Post

 ##  What are some differences between interfaces and types in TypeScript?
 -----
 
 ইন্টারফেস  আর  টাইপ  এর  মূল   পার্থক্য  

১. ইন্টারফেস   অবজেক্ট  এর  structure বা shape  দেয়ার  জন্য   ব্যাবহার  হয়  ।  এটি শুদু  অবজেক্ট  structure  এর  কাজ  করে ।
অর্থাৎ, একটি অবজেক্টে কী কী প্রপার্টি থাকবে এবং তাদের টাইপ কী হবে—এটাই ইন্টারফেস দিয়ে বলা হয়।
  এক্সাম্পল 
interface User {
  name: string;
  age: number;
}

* অন্যদিকে  টাইপ     অনেক  বেশি  flexiable  এটি   শুধু  অবজেক্ট  এ  নয়  আরো অনেক কিছু তে  কাজ  করে -
_Primitive values (string, number, boolean)

_Functions

_Tuples

__Objects   ।

  এক্সাম্পল :
type ID = string | number;
type Point = [number, number];


২. ইন্টারফেস টাইপ    দুটিই  এক্সটেন্ড  হিসেবে ব্যাবহার করা যায়   কিন্তু   সিন্টেক্স  ডিফারেন্ট হয় ।

বড় প্রজেক্টে interface extend করা সাধারণত সহজ এবং readable হয়।

    এক্সাম্পল : :
Interface extend:
interface A { x: number }
interface B extends A { y: number }

Type extend/intersect:
type A = { x: number }
type B = A & { y: number }


৩. TypeScript-এ  ইন্টারফেস এর একটি বিশেষ সুবিধা হলো Declaration Merging।    কিন্তু  টাইপ  এ   Declaration Merging   নেয়  । 

    এক্সাম্পল : :

Interface Merge হয়:
  
interface User {
  name: string;
}

interface User {
  age: number;
}

const person: User = {
  name: "Nahia",
  age: 20
};

 Type Merge হয় না:
type User = { name: string };
type User = { age: number }; // ❌ Error


৪.  টাইপ  TypeScript-এর সবচেয়ে শক্তিশালী ফিচারগুলোর সাথে কাজ করে ।Interface এ এসব করা সম্ভব নয়।

 এক্সাম্পল :
type Status = "success" | "error";
type ApiResponse<T> = T extends string ? string : number;

 সারমর্ম : TypeScript-এ interface এবং type দুটোই গুরুত্বপূর্ণ।
অবজেক্ট   এ  structure  এর  জন্য  ইন্টারফেস    use  করা  ভালো ।


Primitive values (string, number, boolean)  
Functions
Tuples
Objects type use  করা  ভালো ।

