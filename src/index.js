function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "233d7725d7of806acc300f5t46cfc23b";
  let prompt = `Generate a ${instructionsInput.value} recipe`;
  let context =
    "You are an accomplished chef and love to share your unique and creative recipes. Your mission is to create a simple recipe using everyday ingredients following the dietary requirements provided. Please respond in HTML format and do not include markdown in your response. Do not use the ampersand symbol in your response. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the recipe but not in the footer.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating your ${instructionsInput.value} recipe...`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
