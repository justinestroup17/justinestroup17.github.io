document.querySelector("title").focus();


// Book Class: Represents a Book
class Book {
    constructor(title, isbn) {
        this.title = title;
        this.isbn = isbn;
    }
}
// UI Class: Handle UI Tasks
class UI {
    /* CANNOT GET TO WORK:
    static deleteAllBooks() {
        books.forEach((book) => UI.deleteBook(el));
    } */
    // Don't want to instantiate the UI class, so all methods will be static
    static displayBooks() {
        
        const books = Store.getBooks();

        // Call method on each book by passing book to list
        books.forEach((book) => UI.addBookToList(book));
    }
    static displayDefaults() {
        const DefaultGear = [
            {
                title: 'Boots',
                isbn: '2'
            },
            {
                title: 'Pants',
                isbn: '1'
            },
            {
                title: 'Helmet',
                isbn: '1'
            },
            {
                title: 'Goggles',
                isbn: '1'
            },
            {
                title: 'Google Lenses',
                isbn: '1'
            },
            {
                title: 'Base Layer',
                isbn: '1'
            },
            {
                title: 'Long Socks',
                isbn: '1'
            }
        ];
        const gear = DefaultGear;

        gear.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-primary btn-sm delete"><i class="fas fa-regular fa-square-check"></i></a></td>
        `;
        list.appendChild(row);
    }
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            // Delete whole row
            el.parentElement.parentElement.remove();
        }
    }
    static showAlert(message, className) {
        // Create a div showing success or failed adding book
        const div = document.createElement('div');
        // Use bootstrap classes for alert styling
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#gear-form');
        // Insert the div before the form
        container.insertBefore(div, form);

        // Make alert disappear in 3 seconds
        // Anything with class of alert, remove
        setTimeout(() => document.querySelector('.alert').remove(), 2000); // 2 Seconds
    }
    // Makes the text in the fields go away after hitting submit
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            // Check if current book isbn matches
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// When content loads, display books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event: Add a Book
// Listen for a submit on form and when that happens, 
document.querySelector('#gear-form').addEventListener('submit', (e) => {
    // Prevent actual submit (not submitting to server)
    e.preventDefault();
    // Get form values & clean up input (capitalizing first letter and lower casing the rest)
    const title = document.querySelector('#title').value.charAt(0).toUpperCase() +
    document.querySelector('#title').value.slice(1).toLowerCase();
    const isbn = document.querySelector('#isbn').value;
    
    // Validate all fields are entered
    if (title === '' || isbn === '') {
        UI.showAlert('Please fill in all fields', 'danger');
    } else {
        // After getting values, instantiate a book from book class
        const book = new Book(title, isbn);
        UI.addBookToList(book);

        // Add book to store
        Store.addBook(book);

        // Show success message
        UI.showAlert('Gear added', 'success');

        // Clear fields of form
        UI.clearFields();
    }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove book from UI
    UI.deleteBook(e.target);

    // Remove book from storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    UI.showAlert('Gear removed', 'success');
});


// Clear all
/* function clearData() {
    localStorage.clear();
    location.reload();
    return;
} */

/* CANNOT GET TO WORK:
document.querySelector('#clear-all').addEventListener("click", (e) => {
    const books = Store.getBooks();
    // Remove book from UI
    books.forEach((book) => UI.deleteBook(e.target));
    books.forEach((book) => Store.removeBook(e.target.parentElement.previousElementSibling.textContent));
    UI.showAlert('All gear removed', 'success');
}); */

document.querySelector('#reset-defaults').addEventListener("click", resetToDefault);

// Reset to defaults
function resetToDefault() {
    UI.displayDefaults();
}
const yearElement = document.getElementById('year');
copyrightYear(); // Automatically updates copyright year
// Get year from today's date
function copyrightYear() {
    const todaysDate = new Date();
    const year = todaysDate.getFullYear();
    yearElement.innerHTML = year;
}