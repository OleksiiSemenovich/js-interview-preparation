/**
 * 
 * @param {*} title - название книги
 * @returns - возвращает Promise (обещание) с обьектом (найденная книга)
 */
exports.findBookAPI = (title) => Promise.resolve({title, year: 2021, numberOfPages: 300});

/**
 * 
 * @param {*} arrayOfNumbers - массив чисел
 * @returns - возвращает самое маленькое число
 */
exports.getSmallestNumberInArray = (arrayOfNumbers) => Math.min(...arrayOfNumbers);
