// movieStorte contains title, genre and availableCopies which the customer
//can inherit the propeties in the movieStore.

class movieStore {
  constructor(title, genre, availableCopies) {
    this.title = title;
    this.collection = genre;
    this.availableCopies = availableCopies;
  }
  // rentMovie  and return are method in movieStore class, we access it with this.
  

  rentMovie() {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      return ` you have successfuly rented ${this.title} `;
    } else {
      return `Sorry, ${this.title} is currently out of stock`;
    }
  }

  returnMovie() {
    this.availableCopies++;
    return `Thank you for returning ${this.title}`;
  }
}
// customer also inherit from the  movieStore
// customer lass has a propeties ... and methods
//we can create as many customers we want and they will also acess the movie store properties..

   class customer {
   constructor(name) {
    this.name = name;
    this.rentedMovies = [];
  }

  rentMovies(message) {
    const available = message.rentMovie();

    if (!available.includes("out of stock")) {
      this.rentedMovies.push(message.title);
    }
    return available;
  }

  returnMovie(movie) {
    const index = this.rentedMovies.indexOf(movie.title);
    if (index !== -1) {
      this.rentedMovies.splice(index, 1);
      return movie.returnMovie();
    } else {
      return "You can't return a movie you haven't rented.";
    }
  }

  listRentedMovies() {
    if (this.rentedMovies.length > 0) {
      return `Rented movies by ${this.name}: ${this.rentedMovies.join(", ")}`;
    } else {
      `${this.name} hasn't rented any movies yet.`;
    }
  }
}

//here we create a new movieStores 

const movie1 = new movieStore("mission Imposssible", "action", 2);
const movie2 = new movieStore("Extraction2", "action", 2);

//here we create a new  customers
const customer1 = new customer("John Doe");
const customer2 = new customer("Jane Smith");


console.log(customer1.rentMovies(movie1))//you have successfuly rented mission Imposssible 
console.log(customer1.rentMovies(movie2));// you have successfuly rented Extraction2 
console.log(customer2.rentMovies(movie1));//you have successfuly rented mission Imposssible 

console.log(customer1.listRentedMovies(movie1));//Rented movies by John Doe: mission Imposssible, Extraction2

console.log(customer1.returnMovie(movie1));//Thank you for returning mission Imposssible
console.log(customer2.returnMovie(movie1));//Thank you for returning mission Imposssible

console.log(customer1.listRentedMovies());//Rented movies by John Doe: Extraction2
