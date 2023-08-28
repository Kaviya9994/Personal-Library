const book=document.getElementById('book');
const author=document.getElementById('author');
const booklist=document.getElementById('booklist');
function addBook(){
    const bookTitle=book.value.trim();
    const authorName = author.value.trim();
    if (bookTitle === "" || authorName ===""){
    alert("Please enter the bookname and author!");
     return;
}
const li=document.createElement('li');
li.innerHTML=`<span class="title">${bookTitle}</span> : <span class="authorName">${authorName}</span>
<span class="delete" onclick="deleteBook(this)"><b> DELETE  </b></span>`;

booklist.appendChild(li);
book.value="";
author.value="";
}

function deleteBook(element){
    if(confirm("Are you sure that you want to delete this book?")){
    element.parentElement.remove();
 }
}