const ML_TO_OZ = 0.033814;

function mlToOz(ml) {
  return Math.round(parseFloat(ml) * ML_TO_OZ * 10) / 10;
}

// Converts ml measurements in an ingredient string to oz.
// Handles ranges ("120-150ml") and single values ("50ml").
// Non-ml strings are returned unchanged.
export function convertIngredient(ingredient, unit) {
  if (unit === "ml") return ingredient;
  return ingredient
    .replace(/(\d+(?:\.\d+)?)-(\d+(?:\.\d+)?)\s*ml/g, (_, a, b) => `${mlToOz(a)}-${mlToOz(b)}oz`)
    .replace(/(\d+(?:\.\d+)?)\s*ml/g, (_, n) => `${mlToOz(n)}oz`);
}
