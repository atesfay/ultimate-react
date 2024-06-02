const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destracturing

const book = getBook(2);

// without Destracturing
// const title = book.title;
// const author = book.author;

// Destracturing in action
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

book;

title;
author;

console.log(author, title);

// Destracturing with arrays

// without Destracturing
// const primaryGenres = genres[0];
// const secondaryGenres = genres[1];

// Destracturing Array in action
const [primaryGenres, secondaryGenres] = genres;

console.log(primaryGenres, secondaryGenres);

// Rest Operator  - we use '...' to represent other/rest

const [primaryGenres1, secondaryGenres1, ...otherGenres] = genres;
console.log(primaryGenres, secondaryGenres, otherGenres);

// Spread Operator - we also use '...' to represent spread
// Eg :- if we want to add new genres
const newGenres = [...genres, "epic fantasy"];
newGenres;

// We can use Spread to add/update
const updateBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  //Overwriting an existing property
  pages: 1210,
};
updateBook;

// Template Literals - we use ``
const bookSummary = `${title}, is a ${pages} pages long book, it was written by ${author} and published in ${
  publicationDate.split("-")[0]
}`;

bookSummary;

// Ternaries instead of if/else statements
// condtion  value ? firstOpraned : secondOpraned;
// firstOpraned = the condition is true
// secondOpraned = the condtion is false
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

const bookSummary2 = `${title}, is a ${pages} pages long book, it was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adopted as a movie.`;
bookSummary2;

// Arrow function

//Regular function
// function getYear(str) {
//   return str.split("-")[0];
// }

// with Arrow funcation
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// Short-Circuiting
console.log(true && "Some string"); // becuase it true it look to the seconf value
console.log(false && "Some string"); // becuase it's false it doesn't even check the next value
console.log(hasMovieAdaptation && "This book has a movie");

// falsy values : 0,'', null, undefined
// And
console.log("Abraham" && "Some string values");
console.log(0 && "Some string values");

// Or
console.log(true || "Some string values"); //
console.log(false || "Some string");
console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// When value is 0 it cauase falsy value which is incorrect
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

// WE use knowlade collasing to fix that '??'
const countCorrect = book.reviews.librarything.reviewsCount ?? "no data";
countCorrect;

// Optional Chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  goodreads;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

// The Array map Method
const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((element) => element * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// Array filter Method - used to filter array output
const longBooksWithMovies = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovies;

const advantureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
advantureBooks;

// Array reduce () Method
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// Array sort() Method
const arr = [3, 7, 1, 9, 6];
const sortedArr = arr.slice().sort((a, b) => a - b);
sortedArr;
arr;

const sortedbyPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedbyPages;

// Working with Immutable Arrays

// 1) Add book object to the Array

const newBook = {
  id: 6,
  title: "Harry Pteer and the Chabmer of Screts",
  author: "J.K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from Array
const bookAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
bookAfterDelete;

// 3) Update book object in the array
const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
bookAfterUpdate;

// Aysnchronous JavaScript : Promises
// JS will print 'Abraham' untill fetch() is done
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("Abraham");

// We do much better the above fetch() with teh follwoing asynch / await

async function getTodos() {
  const responseData = await fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const data = await responseData.json();
  console.log(data);
  return data;
}
const todos = getTodos();
console.log(todos);

console.log("Abraham");
