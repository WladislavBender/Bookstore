function commentsTemplate(comment) {
  return `<div class="commentsDFlex">
  <p class="usernameSpace">${comment.name}</p>
  <p class="commentSpace">${": " + comment.comment}</p>
  </div>`;
}


function generateBookTemplate(indexBooks) {
  return `
    <div class="mainContent">
      <div class="mainBackground">
        <div>
          <h2 id="bookTitle" class="bookDIVUnderline">${books[indexBooks].name}</h2>
          <div class="bookDIVUnderline imgBackground">
            <img class="bookImg" src="./assets/icons/book_icon_2.png" alt="">
          </div>
        </div>
        <div class="priceLikes">
          <div class="priceSpace">
            <p class="priceDesign" id="first_price">${formatPrice(books[indexBooks].price)}</p>
            <div class="mainContent">
              <div id="likeNumber" class="spaceLike">${books[indexBooks].likes}</div>
              <i style="font-size: 25px;" onclick="toggleLikes(${indexBooks})" id="heart-${indexBooks}" class="fas fa-heart"></i>
            </div>
          </div>
        </div>
        <div class="description bookDIVUnderline">
          <div class="descriptionSpace">
            <p style="font-weight: bold;">Author</p>
            <p style="font-weight: bold;">Erscheinungsjahr</p>
            <p style="font-weight: bold;">Genre</p>
          </div>
          <div>
            <p>${": " + books[indexBooks].author}</p>
            <p>${": " + books[indexBooks].publishedYear}</p>
            <p>${": " + books[indexBooks].genre}</p>
          </div>
        </div>
        <div class="commentSection">
          <p class="headlineComment font_weight_bold">Kommentare:</p>
          <div id="comment-${indexBooks}" class="commentArea"></div>
          <form id="commentForm-${indexBooks}" class="inputSpace">
            <textarea class="inputStyle" id="comment_input-${indexBooks}" name="comment" rows="4" cols="50"
              placeholder="Schreibe deinen Kommentar ..." required></textarea>
            <button onclick="addComment(${indexBooks})" style="font-size: 20px;" type="submit" class="fa">&#xf1d9;</button>
          </form>
        </div>
      </div>
    </div>
  `;
}