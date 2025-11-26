function addBook() {
  const titleInput = document.getElementById('new-book-title');
  const urlInput = document.getElementById('new-book-url');
  if (!titleInput.value || !urlInput.value) return showToast('Please enter both title and URL!');
  
  const li = document.createElement('li');
  li.textContent = titleInput.value;
  li.style.cursor = 'pointer';
  li.onclick = () => window.open(urlInput.value, '_blank');
  bookshelf.appendChild(li);

  // Save to localStorage
  books.push({ title: titleInput.value, url: urlInput.value });
  localStorage.setItem('books', JSON.stringify(books));

  titleInput.value = '';
  urlInput.value = '';
  urlInput.focus();
  showToast('Book added!');
}

// Load saved books
const savedBooks = JSON.parse(localStorage.getItem('books') || '[]');
if(savedBooks.length) {
  bookshelf.innerHTML = '';
  savedBooks.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.title;
    li.style.cursor = 'pointer';
    li.onclick = () => window.open(book.url, '_blank');
    bookshelf.appendChild(li);
    books.push(book);
  });
}
