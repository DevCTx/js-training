const mainSection = document.getElementById("main-section");

const viewCategoryButton = document.getElementById('view-category-button');
const bookmarkListSection = document.getElementById("bookmark-list-section");
const closeListButton = document.getElementById('close-list-button');
const deleteBookmarkButton = document.getElementById('delete-bookmark-button');

const addBookmarkButton = document.getElementById('add-bookmark-button');
let categoryDropdown = document.getElementById("category-dropdown");
const formSection = document.getElementById("form-section");
const closeFormButton = document.getElementById('close-form-button');
const addBookmarkButtonForm = document.getElementById('add-bookmark-button-form');

// UserCase 1
let bookmarks = [];
function getBookmarks( category ) {
  const allBookmarks = JSON.parse( localStorage.getItem("bookmarks") ) || [];

  // Filter by category and validate
  return allBookmarks.filter((bookmark) => 
    bookmark.name && bookmark.category && bookmark.url && bookmark.category === category
  );
}

function saveBookmarks( bookmarksObj ) {
  return localStorage.setItem( "bookmarks", JSON.stringify(bookmarksObj))
}

// UserCase 3
function displayOrCloseForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

function getCategoryOption() {
  categoryDropdown = document.getElementById("category-dropdown");
  const categoryOption = categoryDropdown.querySelector(`option[value="${categoryDropdown.value}"]`);

  return categoryOption ? categoryOption.innerText : "";
}

// UserCase 4
addBookmarkButton.addEventListener("click", () => {
  const categoryName = document.querySelector(`#form-section .category-name`);
  categoryName.innerText = getCategoryOption();
  displayOrCloseForm();
})

// UserCase 5
closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
})

// UserCase 6
addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarkName = document.getElementById('name');
  const bookmarkUrl = document.getElementById('url');

  const bookmarkObj = {
    name : bookmarkName.value,
    category : categoryDropdown.value,
    url : bookmarkUrl.value,
  }

  // Get ALL bookmarks from localStorage
  const allBookmarks = JSON.parse( localStorage.getItem("bookmarks") ) || [];
  allBookmarks.push(bookmarkObj);
  saveBookmarks( allBookmarks );

  // UserCase 7
  bookmarkName.value = "";
  bookmarkUrl.value = "";
  displayOrCloseForm();

})

// UserCase 8
function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
}

// UserCase 9
viewCategoryButton.addEventListener("click", () => {
  const categoryName = document.querySelector(`#bookmark-list-section .category-name`);
  categoryName.innerText = getCategoryOption();

  bookmarks = getBookmarks( categoryDropdown.value );  
  const categoryList = document.getElementById("category-list");

  // User Case 10
  if (!bookmarks.length){
    categoryList.innerHTML = "<p>No Bookmarks Found</p>"
  }
  else{ 
    //User Case 11/12    
    let msgHTML = "";
    for (const bookmark of bookmarks) {
      msgHTML += `<div>
        <input type='radio' name='radioBookmark' id='${bookmark.name}' value='${bookmark.name}'>
        <label for='${bookmark.name}'><a href='${bookmark.url}'>${bookmark.name}</a></label>
      </div>`;
    }
    categoryList.innerHTML = msgHTML;
  }

  displayOrHideCategory();
})

// User Case 13
closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
})

// User Case 14
deleteBookmarkButton.addEventListener("click", () => {
  const radioBookmark = document.querySelector("input[name='radioBookmark']:checked");
  if (radioBookmark) {
    // Get ALL bookmarks
    const allBookmarks = JSON.parse( localStorage.getItem("bookmarks") ) || [];
    
    // Find and remove the bookmark
    const index = allBookmarks.findIndex((bm) => 
      bm.name === radioBookmark.value && bm.category === categoryDropdown.value
    );
    
    if (index !== -1) {
      allBookmarks.splice(index, 1);
      saveBookmarks( allBookmarks );
    }
    
    // Refresh the displayed list
    bookmarks = getBookmarks( categoryDropdown.value );
    const categoryList = document.getElementById("category-list");
    
    if (!bookmarks.length){
      categoryList.innerHTML = "<p>No Bookmarks Found</p>"
    }
    else{ 
      let msgHTML = "";
      for (const bookmark of bookmarks) {
        msgHTML += `<div>
          <input type='radio' name='radioBookmark' id='${bookmark.name}' value='${bookmark.name}'>
          <label for='${bookmark.name}'><a href='${bookmark.url}'>${bookmark.name}</a></label>
        </div>`;
      }
      categoryList.innerHTML = msgHTML;
    }
  }
})
