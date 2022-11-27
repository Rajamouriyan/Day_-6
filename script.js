// 1) https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// code
// creation of class
class movie{
    // use constructor to represent the values
    constructor(title,studio,rating){
        // use this function to assign the value
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

// assign the values to the constructor
let movie1 = new movie ("title","studio","rating");

console.log(movie1);

// output
// movie { title: 'title', studio: 'studio', rating: 'rating' }


// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.


// code
// creation of class
class movie{
    // use constructor to represent the values
    constructor(title,studio,rating="PG"){
        // use this function to assign the value
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

// assign the values to the constructor
let movie1 = new movie ("title","studio",);

console.log(movie1);

// output
// movie { title: 'title', studio: 'studio', rating: 'PG' }


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// code
// creation of class
class movie{
    // use constructor to represent the values
    constructor(title,studio,rating){
        // use this function to assign the value
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

// assign the values to the constructor
let movie1 = new movie ("title","studio","PG");
let movie2 = new movie ("title","studio","PG-13");
let movie3 = new movie ("title","studio","PG");

let allmovies=[movie1,movie2,movie3];
let output =  allmovies.filter(movies => movies.rating == "PG");
console.log(output);


// output
// [
//     movie { title: 'title', studio: 'studio', rating: 'PG' },
//     movie { title: 'title', studio: 'studio', rating: 'PG' } 
//   ]

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

// code
// creation of class
class movie{
    // use constructor to represent the values
    constructor(title,studio,rating){
        // use this function to assign the value
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}

// assign the values to the constructor
let movie1 = new movie ("Casino Royale","Eon Productions","PG13");

console.log(movie1);


// output
// title: 'Casino Royale',   
// studio: 'Eon Productions',
// rating: 'PG13


// 2) https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

// Code

class circle{
    radius = 1 ;
    color = "red";

    constructor (radius,color){
        this.radius=radius;
        this.color=color;
    }

    getradius(){
        return this.radius
    }

    setradius(radius){
        this.radius = radius
    }

    getcolor(){
        return this.color
    }

    setcolor(color){
        this.color=color
    }

    toString(){
        return `Radius: ${this.radius} Color: ${this.color}`
    }

    getArea(){
        return ((Math.PI)*this.radius*this.radius)
    }

    getcircumference(){
        return (2*(Math.PI)*this.radius)
    }
}


let cir = new circle(1.0, 'red')
cir.setradius(2.0)
cir.setcolor("Yellow")
console.log(cir.toString())
console.log("Area: "+cir.getArea())
console.log("Circumference: "+cir.getcircumference())

// output
// Radius: 2 Color: Yellow
// Area: 12.566370614359172
// Circumference: 12.566370614359172


// 3) Write a “person” class to hold all the details.

// create a class about person
class person {

    // create a constructor to include the details of a personal details
    constructor (name,age,email,location,contact,profession){
        this.name=name;
        this.age=age;
        this.email=email;
        this.location=location;
        this.contact=contact;
        this.profession=profession;
    }

    // call back the details of the person to fetch inside the array method
    getPersonDetails(){
        let data=`
        Name:${this.name}
        Age:${this.age}
        Email:${this.email}
        Location:${this.location}
        Contact:${this.contact}
        Profession:${this.profession}
        `
        return data;
    }
}

// Provide an information
let person1 = new person ("Dhoni",36,"dhoni@gmail.com","ranchi","xxx-yyyy","cricketer");
let person2 = new person ("Kholi",30,"kholi@gmail.com","bangalore","xxx-yyyy","cricketer");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());


// output

// Name:Dhoni
// Age:36
// Email:dhoni@gmail.com
// Location:ranchi      
// Contact:xxx-yyyy     
// Profession:cricketer 


// Name:Kholi
// Age:30
// Email:kholi@gmail.com
// Location:bangalore
// Contact:xxx-yyyy
// Profession:cricketer

// 4) write a class to calculate the uber price.

// code

 class price{
    constructor (TotalFare){

        this.TotalFare=TotalFare;
    }

        getTotal(){
        let data=`
            TotalFare (rs):${this.TotalFare}
        `
        return data;
    }
 
}

let BaseFare = 100;
let distance = 10;
let fare = 15;
let KmFare = distance*fare;
let Convenience = 50;
let TotalFare = new price (BaseFare+KmFare+Convenience);

console.log(TotalFare.getTotal());


// output
// TotalFare (rs):300
