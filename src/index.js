function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Vegan spaghetti bolognese",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
