const buttonList = document.querySelectorAll(".button");

const arr = [...buttonList];

arr.forEach((item, i) => {
  item.addEventListener("click", () => {
    alert(`${i + 1}`);
  });
});
