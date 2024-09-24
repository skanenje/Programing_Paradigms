// Base functions
function filterEntries(obj, callback) {
    return Object.fromEntries(
      Object.entries(obj).filter(entry => callback(entry))
    );
  }
  
  function mapEntries(obj, callback) {
    return Object.fromEntries(
      Object.entries(obj).map(entry => callback(entry))
    );
  }
  
  function reduceEntries(obj, callback, initialValue) {
    return Object.entries(obj).reduce(callback, initialValue);
  }
  
  // Additional functions
  function totalCalories(cart) {
    const total = reduceEntries(cart, (total, [item, grams]) => {
      return total + (nutritionDB[item].calories * grams / 100);
    }, 0);
    return Number(total.toFixed(1));
  }
  
  function lowCarbs(cart) {
    return filterEntries(cart, ([item, grams]) => {
      return (nutritionDB[item].carbs * grams / 100) < 50;
    });
  }
  
  function cartTotal(cart) {
    return mapEntries(cart, ([item, grams]) => {
      const itemNutrition = nutritionDB[item];
      const scaledNutrition = Object.fromEntries(
        Object.entries(itemNutrition).map(([nutrient, value]) => [
          nutrient,
          Number((value * grams / 100).toFixed(3))  // Round to 3 decimal places
        ])
      );
      return [item, scaledNutrition];
    });
  }