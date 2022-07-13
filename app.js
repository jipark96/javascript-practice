const title = document.querySelector("div.hello");

function handleTitleCLick() {
  console.log("title was clicked!");
  title.style.color = "blue";
}


title.addEventListener("click",handleTitleCLick);
