// Our Data
console.log(bookStore)

function formatPrice(price) {
  return '$' + parseFloat(price).toFixed(2)
}

function blurb(book) {
  const title = book.title;
  const author = book.author;
  const price = book.price;

  return `${title} by ${author} is on sale for $${price}`
}

////////////////////////////////
//     Rendering Functions    //
////////////////////////////////

renderHeader(bookStore)
renderFooter(bookStore)

function renderHeader(bookStore) {
  document.getElementById('bookstore-name').textContent = bookStore.name
}

function renderFooter(bookStore) {
  document.getElementById('store').textContent = bookStore.location;
  document.getElementById('number').textContent = bookStore.number;
  document.getElementById('address').textContent = bookStore.address;
}

function renderBook(book) {
  const li = document.createElement('li');
  li.className = 'list-li';

  const h3 = document.createElement('h3');
  h3.textContent = book.title;
  li.append(h3)

  const author = document.createElement('p'); 
  author.textContent = book.author;
  li.append(author)

  const price = document.createElement('p');
  price.textContent = formatPrice(book.price);
  li.append(price)

  const img = document.createElement('img');
  img.src = book.imageUrl;
  img.alt = `${book.title} cover`;
  img.title = `${book.title} cover`;
  li.append(img)

  const button = document.createElement('button');
  button.textContent = 'Delete';

  // 1. add event listener to delete a book
  li.append(button);

  document.getElementById('book-list').append(li)
}

bookStore.inventory.forEach(book => renderBook(book))

////////////////////////////////
// Event listeners / handlers //
////////////////////////////////

// 2. add event listeners and handlers to toggle the form display

// 3. handle the form submission - create a new book object using the form values, call renderBook to add it to the DOM