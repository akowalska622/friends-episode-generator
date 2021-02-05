let episode = document.querySelector(".episode");

window.addEventListener("click", (event) => {
  let num = 24;
  if (event.target.id === "3" || event.target.id === "6") num = 25;
  if (event.target.id === "10") num = 18;

  if (event.target.matches("button")) {
    episode.innerText = `Chosen season: ${event.target.id}
    Let's watch episode number: ${Math.ceil(Math.random() * Number(num))}`;
  }
});
