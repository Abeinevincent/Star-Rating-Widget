//First select the classes to tackle
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

//Hide the star-widget upon clicking the post button and display the post message
btn.onclick = ()=>{
  widget.style.display = "none";
  post.style.display = "block";
  
  //Hide the previous post message upon clicking the edit button and display the star-widget  
  editBtn.onclick = ()=>{
    widget.style.display = "block";
    post.style.display = "none";
  }
  return false;
}
