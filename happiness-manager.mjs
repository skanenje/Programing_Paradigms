import fs from 'fs/promises';
import path from 'path';

const GUESTS_PER_PACK = {
  '6-packs-beers': 6,
  'wine-bottles': 4,
  'water-bottles': 4,
  'soft-bottles': 4,
};

const GUESTS_PER_VEGGIE = 3;
const VEGGIES = ['eggplants', 'courgettes', 'mushrooms', 'hummus'];

async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {};
    }
    throw error;
  }
}

async function writeJsonFile(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function processGuestAnswers(guestsDir) {
  const files = await fs.readdir(guestsDir);
  const guestAnswers = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(guestsDir, file);
      return readJsonFile(filePath);
    })
  );

  return guestAnswers.filter((answer) => answer.answer === 'yes');
}

function calculateDrinks(vipGuests) {
    const drinks = vipGuests.map((guest) => guest.drink).filter(Boolean);
    const drinkCounts = drinks.reduce((acc, drink) => {
      acc[drink] = (acc[drink] || 0) + 1;
      return acc;
    }, {});
  
    const result = {};
    for (const [key, guestsPerPack] of Object.entries(GUESTS_PER_PACK)) {
      let count = 0;
      if (key === '6-packs-beers') {
        count = drinkCounts['beer'] || 0;
      } else {
        const drinkType = key.split('-')[0];
        count = drinkCounts[drinkType] || 0;
      }
      if (count > 0) {
        result[key] = Math.ceil(count / guestsPerPack);
      }
    }
    return result;
  }
  function calculateFood(vipGuests) {
    const foodPreferences = vipGuests.map((guest) => guest.food).filter(Boolean);
    const foodCounts = foodPreferences.reduce((acc, food) => {
      acc[food] = (acc[food] || 0) + 1;
      return acc;
    }, {});
  
    const result = {
      potatoes: vipGuests.length,
    };
  
    const veggieCount = (foodCounts.veggie || 0) + (foodCounts.vegan || 0);
    if (veggieCount > 0) {
      for (const veggie of VEGGIES) {
        result[veggie] = Math.ceil(veggieCount / GUESTS_PER_VEGGIE);
      }
      // Adjust mushrooms quantity separately
      result.mushrooms = Math.min(result.mushrooms * 3, veggieCount);
    }
  
    if (foodCounts.carnivore) {
      result.burgers = foodCounts.carnivore;
    }
  
    if (foodCounts.fish) {
      result.sardines = foodCounts.fish;
    }
  
    const omnivoreCount = (foodCounts.omnivore || 0) + (foodCounts.everything || 0);
    if (omnivoreCount > 0) {
      result.kebabs = omnivoreCount;
    }
  
    return result;
  }
async function main() {
  const [, , guestsDir, outputFile] = process.argv;

  if (!guestsDir || !outputFile) {
    console.error('Please provide both the guests directory and output file.');
    process.exit(1);
  }

  try {
    const allGuests = await processGuestAnswers(guestsDir);
    const vipGuests = allGuests.filter(guest => guest.answer.toLowerCase() === 'yes');

    if (vipGuests.length === 0) {
      console.log('No one is coming.');
      process.exit(0);
    }

    const drinks = calculateDrinks(vipGuests);
    const food = calculateFood(vipGuests);

    const shoppingList = { ...drinks, ...food };

    const existingList = await readJsonFile(outputFile);
    const updatedList = { ...existingList, ...shoppingList };

    await writeJsonFile(outputFile, updatedList);
    console.log('Shopping list updated successfully.');
  } catch (error) {
    console.error('An error occurred:', error.message);
    process.exit(1);
  }
}

main();