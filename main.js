const ipr = 2;

let ingredients = ["penut butter", "jelly", "hot dog buns", "chicaron beans", "country beans", "serrano peppers", "cheese", "rotini noodles", "ramen noodles", "worcestershire sauce", "chulula hot suace", "yellow mustard"];

const reject = [
  ["penut butter", "chulula hot sauce"],
  ["penut butter", "yellow mustard"],
];

const listIngredients = document.body.querySelector('#ingredients-list');

function ingredientsDisplay(ingredients) {
  ingredients.forEach((i) => {
    const node = document.createElement('li');
    node.classList.add = "ingredient";
    node.innerText = `${i}`;
    listIngredients.appendChild(node);
  })
};
ingredientsDisplay(ingredients);

function factorial(x) {
  let y = x;
  let factorial = 1;
  for (let i = 0; i < x; i++) {
    factorial = factorial * y;
    y -= 1;
  }
  return factorial;
};

function permutions(n, r) {
  // n total num of items
  // r num items per combination
  const x1 = factorial(n);
  const x2 = factorial(n - r);
  return x1 / x2;
};

function generateRecipes(r, ing) {
  // const rand = Math.floor((Math.random() * (max - min)) + min);
  // console.log(rand);

  let recipes = [];
  
  for (let i = 0; factorial(ing.length - 1) - (r - 1) > i; i++) {
    let recipe = "";
    
    recipes.push(recipe);
  }
  // let next = ing.length - 1;
  // let count = 0;
  // let ref = 0;
  // for (let i = 0; factorial(ing.length - 1) - (r - 1) > i; i++) {
  //   if (count === next) {
  //     count = 0;
  //     next -= 1;
  //     ref += 1;
  //   }
  //   let recipe = `${ing[ref]}, `;
  //   recipes.push(recipe);
  //   count += 1;
  // }

  return recipes;
};

const recipes = generateRecipes(ipr, ingredients);

const listRecipes = document.body.querySelector('#recipes-list');

function recipesDisplay(recipes) {
  recipes.forEach((recipe) => {
    const node = document.createElement('li');
    node.classList.add = "recipe";
    node.innerText = `${recipe}`;
    listRecipes.appendChild(node);
  })
};
recipesDisplay(recipes);