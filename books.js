const { findBookAPI, getSmallestNumberInArray } = require("./utils");

/**
 * 
 * @param {*} books - массив обьектов книг (  [{title: "Book1", year: 2019}, {title: "Book2", year: 1960}]  )
 * @returns - возращает самую старую книгу - 1960
 * 
 * "Замокать "mock" (имитация, фейк)" функцию getSmallestNumberInArray (зависимость с другого файла).
 * Функция должна возвращать любое фейково число
 * 
 * Написать тест, которые проверяет, что функция getOldestBookYear возвращает результат
 * вызова "getSmallestNumberInArray", который "замоканный"
 * 
 * Написать тест, который проверяет, что "замоканная" функция getSmallestNumberInArray, 
 * вызывается с массивом чисел, которые внутри функции "getOldestBookYear"
 * была преобразована в массив, используя исходный массив обьектов (книг)
 */
exports.getOldestBookYear = (books) => {
  const bookYears = books.map(book => book.year);
  return getSmallestNumberInArray(bookYears);
};


/**
 * Написать тест на метод - getBookInfo
 * Этот метод должен возвращать новый обьект
 * Документация - https://jestjs.io/docs/expect#tomatchobjectobject
 *  
 */
class Book {
  constructor(title, year, numberOfPages) {
    this.title = title;
    this.year = year;
    this.numberOfPages = numberOfPages;
  }
  getBookInfo() {
    return {
      title: this.title,
      year: this.year,
      numberOfPages: this.numberOfPages
    };
  }
  getYear() {
    return this.year;
  }
}
exports.Book = Book;


/**
 * 
 * @param {*} title - название книги
 * @param {*} onFindBook - функция, которая принимает книгу
 * 
 * "Замокать (имитация, фейк)" функцию "findBookAPI" (зависимость с другого файла).
 * Эта функция должна возвращать Promise. В "промис"(Promise) можете вложить любые данные
 * 
 * Написать тест, которые проверяют, что ЗАВИСИМОСТЬ findBookAPI вызывается с аргументом title
 * Написать тест, которые проверяют, что переданная функция onFindBook вызывается 1 раз и вызывается с фиктивной книгой
 */
exports.findBook = (title, onFindBook) => {
  // ищет книжку используя фиктивное API
  // и вызывает наш метод "onFindBook"(передаст найденную книгу в качестве аргумента), когда найдет книгу 
  findBookAPI(title).then(book => {
    onFindBook(book);
  });
};


/**
 * 
 * @param {*} booksArray - массив обьектов книг (  [{title: "Book1", year: 2019}, {title: "Book2", year: 1960}]  )
 * @returns - возращает массив новых обьектов, но уже созданных по классу Book
 * 
 * Ничего "мокать (имитация, фейк)" не нужно!
 * Написать тест, который проверяет, что функция возвращает массив новых обьектов, созданных по классу Book
 * Чтобы определить это - проверьте, что есть функция "getYear", на любом из новых обьектов.
 * Можете вызвать метод "getYear" и проверить, что этот метод работает и возвращает Год
 * 
 * Также проверьте, что количество книг (обьектов) соотв-ет количество изначально переданных - https://jestjs.io/docs/expect#tohavelengthnumber
 * 
 */
exports.createBooksFromArray = (booksArray) => {
  return booksArray.map(bookObject => new Book(bookObject.title, bookObject.year, bookObject.numberOfPages));
};

