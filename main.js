const ipr = 3;

// let ingredients = ["penut butter", "jelly", "hot dog buns", "chicaron beans", "country beans", "serrano peppers", "cheese", "rotini noodles", "ramen noodles", "worcestershire sauce", "chulula hot suace", "yellow mustard"];
let ingredients = ["0", "1", "2", "3", "4"];

const rejections = [
  ["2", "3"],
  ["0", "4"],
  // ["penut butter", "chulula hot sauce"],
  // ["penut butter", "yellow mustard"],
];

function randRange(min, max) {
  // calculate random number between a minimum and maximum
  const rand = Math.floor((Math.random() * (max - min)) + min);
};

function triangleNumber(n) {
  // triangle number formula: (n*(n + 1))/2
  let val = (n**2 + n)/2;
  return val;
};

function factorial(x) {
  let y = x;
  let factorial = 1;
  for (let i = 0; i < x; i++) {
    factorial = factorial * y;
    y -= 1;
  }
  return factorial;
};

function permuation(n , r) {
  // n total num of items
  // r num items per combination
  const x1 = factorial(n);
  const x2 = factorial(n - r);
  return x1 / x2;
}

function combination(n, r) {
  // n total num of items
  // r num items per combination
  const x1 = factorial(n);
  const x2 = factorial(n - r);
  const x3 = factorial(r);
  return x1 / (x2 * x3);
};

function generateRecipes(r, ing) {
  let recipes = [];
  const ingLen = ing.length;

  // variadic input for r through place reference structure
  let place = [];
  for (let i = 0; i < r; i++) {
    place.push(i);
  }
  const pLen = place.length;

  // calculate length of permuation calculation
  const bound = combination(ingLen, r);

  // iterate that many times
  for (let i = 0; i < bound; i++) {
    // CURRENT ITERATION

    // generate recipe
    let recipe = [];
    for (let j = 0; j < pLen; j++) {
      recipe.push(`${ing[place[j]]}`);
    }
    // add recipe to recipes structure
    recipes.push(recipe);

    // NEXT ITERATION
    if (i !== bound - 1) { // no need to prepare for next iteration on last
      // conditionally increase last value of reference number in place structure
      if (place[pLen - 1] !== ingLen) {
        place[pLen - 1] = place[pLen - 1] + 1;
      }
      // adjust other values on respective conditions
      for (let j = pLen - 1; j >= 0; j--) {
        if (place[j] === ingLen) {
          place[j - 1] = place[j - 1] + 1;
          if (place[j - 1] + 1 !== ingLen) {
            place[j] = place[j - 1] + 1;
          } else {
            place[j - 2] = place[j - 2] + 1;
            place[j - 1] = place[j - 2] + 1;
            place[j] = place[j - 1] + 1;
          }
        }
      }
    }
  }
  return recipes;
};

function removeItem(item, arr) {
  let before = [];
  if (item > 0) {
    before = arr.slice(0, item);
  }
  let after = [];
  if (after < arr.length - 1) {
    after = arr.slice(item + 1, arr.length);
  }
  return before.concat(after);
};

function reject(r, rejections) {
  let recipes = r;
  let reject = []; // index of recipes to be removed
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    for (let l = 0; l < rejections.length; l++) {
      let conjunct = 0;
      for (let k = 0; k < rejections[l].length; k++) {
        if (recipe.includes(rejections[l][k])) {
          conjunct += 1;
        }
      }
      if (conjunct === rejections[l].length) {
        reject.unshift(i);
      }
    }
  }

  for (let i = 0; i < reject.length; i++) {
    recipes.splice(reject[i], 1);
  }

  return recipes;
};

let recipes = generateRecipes(ipr, ingredients);
recipes = reject(recipes, rejections);

const listIngredients = document.body.querySelector('#ingredients-list');
const listRecipes = document.body.querySelector('#recipes-list');

function ingredientsDisplay(ingredients) {
  ingredients.forEach((i) => {
    const node = document.createElement('li');
    node.classList.add = "ingredient";
    node.innerText = `${i}`;
    listIngredients.appendChild(node);
  })
};

function recipesDisplay(recipes) {
  recipes.forEach((recipe) => {
    const node = document.createElement('li');
    node.classList.add = "recipe";
    node.innerText = `${recipe}`;
    listRecipes.appendChild(node);
  })
};

ingredientsDisplay(ingredients);
recipesDisplay(recipes);