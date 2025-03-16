let indexBooks = books;


function renderAll() {
  loadFromLocalStorage();
  renderBooks();
}


function renderBooks() {
  let content = document.getElementById('content');
  content.innerHTML = "";
  books.forEach((book, i) => {
    content.innerHTML += generateBookTemplate(i);
    getComments(i);
    let heart = document.getElementById(`heart-${i}`);
    if (heart) {
      heart.classList.toggle("fas", book.liked);
      heart.classList.toggle("far", !book.liked);
    }
  });
}


function addComment(bookIndex) {
  let input = document.getElementById(`comment_input-${bookIndex}`);
  let comment = input.value.trim();
  if (!comment) return alert("Bitte Kommentar eingeben.");
  if (!books || books.length <= bookIndex)
    return console.error("Buch nicht gefunden.");
  let book = books[bookIndex];
  let newComment = { name: "Benutzername", comment };
  book.comments = book.comments || [];
  book.comments.unshift(newComment);
  input.value = "";
  getComments(bookIndex);
  saveToLocalStorage();
}


function toggleLikes(bookIndex) {
  let book = books[bookIndex];
  let heart = document.getElementById(`heart-${bookIndex}`);
  let likes = heart.previousElementSibling;

  book.liked = !book.liked;
  book.likes += book.liked ? 1 : -1;

  heart.classList.toggle("fas", book.liked);
  heart.classList.toggle("far", !book.liked);

  likes.textContent = book.likes;
  saveToLocalStorage();
}


function getComments(bookIndex) {
  let commentTemplateRef = document.getElementById(`comment-${bookIndex}`);
  if (!commentTemplateRef) return;

  commentTemplateRef.innerHTML = "";

  if (books[bookIndex] && books[bookIndex].comments) {
    books[bookIndex].comments.forEach((comment, commentIndex) => {
      commentTemplateRef.innerHTML += commentsTemplate(comment, bookIndex, commentIndex);
    });
  }
}


function formatPrice(price) {
  if (typeof price !== 'number') {
    return 'Ungültiger Preis';
  }

  let formattedPrice = price.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${formattedPrice} €`;
}


function saveToLocalStorage() {
  try {
    localStorage.setItem('booksData', JSON.stringify(books));

  } catch (error) {
    console.error('Fehler beim Speichern im Local Storage:', error);
  }
}


function loadFromLocalStorage() {
  try {
    let storedBooks = localStorage.getItem('booksData');
    if (storedBooks) {
      books = JSON.parse(storedBooks);
    }
  } catch (error) {
    console.error('Fehler beim Laden aus dem Local Storage:', error);
  }
}