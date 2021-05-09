jest.mock("./utils", () => {
    return {
        getSmallestNumberInArray : jest.fn(),
        findBookAPI: jest.fn() 
    }
});
const { getSmallestNumberInArray, findBookAPI } = require("./utils");
const { getOldestBookYear, Book, createBooksFromArray, findBook } = require("./books");

test("return any number", () => {
    getSmallestNumberInArray.mockReturnValue(1);
    const myBooks = [{title: "Book1", year: 2019}, {title: "Book2", year: 1960}];
    expect(getOldestBookYear(myBooks)).toBe(1);
    expect(getSmallestNumberInArray).toHaveBeenCalledWith([2019, 1960]);
    expect(getSmallestNumberInArray).toHaveBeenCalledTimes(1);
});

test("return new object", () => {
    const bookObject = new Book("Test one", 1950, 200);
    expect(bookObject.getBookInfo()).toStrictEqual({title: "Test one", year: 1950, numberOfPages: 200});
});

test("return new objekt from Book", () => {
    const arrayObject = [{title: "Test one", year: 1950, numberOfPages: 200}, {title: "Book2", year: 1960, numberOfPages: 300}];
    const arrayOfBooks = createBooksFromArray(arrayObject);
    expect(arrayOfBooks[0].getYear()).toBe(1950);
    expect(arrayOfBooks.length).toBe(2);
});

test("return promise", async  () => {
    findBookAPI.mockReturnValue(Promise.resolve({title: "book23", year: 2021, numberOfPages: 300})); 
    const callspy = jest.fn();
    findBook("book23", callspy);
    await findBookAPI();
    expect(findBookAPI).toHaveBeenCalledWith("book23");
    expect(callspy).toHaveBeenCalledTimes(1);
    expect(callspy).toHaveBeenCalledWith({title: "book23", year: 2021, numberOfPages: 300});
});