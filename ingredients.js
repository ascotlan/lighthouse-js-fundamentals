const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

const len = ingredients.length;

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < len) {
  console.log(ingredients[i]);
  i++;
}
console.log("\n");
// Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < len; i++) {
  console.log(ingredients[i]);
}
console.log("\n");
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = len - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
