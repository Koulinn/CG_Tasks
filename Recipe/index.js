const recipes = [
  {
    name: "Crock Pot Roast",
    ingredients: [
      " beef roast",
      "brown gravy mix",
      "dried Italian salad dressing mix",
      "dry ranch dressing mix",
      "water",
    ],
    servings: 3,
    steps: `Place beef roast in crock pot.
            Mix the dried mixes together in a bowl and sprinkle over the roast.
            Pour the water around the roast.
            Cook on low for 7-9 hours.`,
  },
  {
    name: "Cake",
    ingredients: ["Chocolate", "Cocoa powder", "Butter", "eggs"],
    servings: 5,
    steps: `Place beef roast in crock pot.
            Mix the dried mixes together in a bowl and sprinkle over the roast.
            Pour the water around the roast.
            Cook on low for 7-9 hours.`,
  },
  {
    name: "Salmon",
    ingredients: ["salmon", "salt", "lemon", "passion fruit"],
    servings: 2,
    steps: `Place beef roast in crock pot.
            Mix the dried mixes together in a bowl and sprinkle over the roast.
            Pour the water around the roast.
            Cook on low for 7-9 hours.`,
  },
];

const addRecipes = (recipes) => {
  recipes.forEach((element) => {
    document.querySelector(".recipes").insertAdjacentHTML(
      "beforeend",
      `
          <div>
          <h5>Recipe: ${element.name}</h5>
          <h6>servings: ${element.servings}</h6>
          <p>${element.steps}</p>
          <ul class=${element.name.replaceAll(" ", "-")}></ul>
          </div>
          
          `
    );
    debugger;
    element.ingredients.forEach((ingredient) => {
      document
        .querySelector(`.${element.name.replaceAll(" ", "-")}`)
        .insertAdjacentHTML(
          "afterbegin",
          `
           <li>${ingredient}</li>
        `
        );
    });
  });
};

window.onload = () => {
  addRecipes(recipes);
};
