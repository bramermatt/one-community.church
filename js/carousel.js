const list = document.querySelector(".carousel");

// We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
const item = document.querySelector(".carousel_item");
const itemWidth = item.offsetWidth;

function handleClick(direction) {
  // Based on the direction we call `scrollBy` with the item width we got earlier
  if(direction === "previous") {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
  } else {
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
  }
}