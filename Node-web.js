// Step 0: npm install axios

const axios = require('axios');

async function fetchBookSummary() {
  try {
    // Step 1: Fetch the list of books
    const booksResponse = await axios.get('https://api.potterdb.com/v1/books');
    const books = booksResponse.data.data;

    if (!books || books.length === 0) {
      console.log('No books found.');
      return;
    }

    // Step 2: Select the first book from the list
    const firstBook = books[0];
    const bookId = firstBook.id;

    // Step 3: Fetch the chapters for the selected book
    const chaptersResponse = await axios.get(`https://api.potterdb.com/v1/books/${bookId}/chapters`);
    const chapters = chaptersResponse.data.data;

    if (!chapters || chapters.length === 0) {
      console.log('No chapters found for the book.');
      return;
    }

    // Step 4: Get the summary of the last chapter
    const lastChapter = chapters[chapters.length - 1];
    const lastChapterSummary = lastChapter.attributes.summary;

    // Step 5: Print the summary to the console
    console.log("Summary of the last chapter:", lastChapterSummary);
  } catch (error) {
    // Error handling for API issues
    console.error('An error occurred while fetching the book data:', error.message);
  }
}

fetchBookSummary();
