import fs from 'fs/promises';
import path from 'path';

const commands = {
  create: 'takes a filename as argument and create it (should have `.json` extension specified)',
  delete: 'takes a filename as argument and delete it',
  add: 'adds a new element to the list in the file or increases the quantity of an existing element',
  rm: 'removes an element from the list in the file or decreases its quantity',
  ls: 'prints the list in the console',
  help: 'prints all the command lines available, with a description of it',
};

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

async function createFile(filePath) {
  await writeJsonFile(filePath, {});
  console.log(`File ${filePath} created.`);
}

async function deleteFile(filePath) {
  await fs.unlink(filePath);
  console.log(`File ${filePath} deleted.`);
}

async function addItem(filePath, item, quantity = 1) {
  const data = await readJsonFile(filePath);
  const numQuantity = Number(quantity);
  const addValue = isNaN(numQuantity) ? 1 : numQuantity;
  data[item] = (data[item] || 0) + addValue;
  if (data[item] <= 0) {
    delete data[item];
  }
  await writeJsonFile(filePath, data);
}

async function removeItem(filePath, item, quantity) {
  const data = await readJsonFile(filePath);
  if (quantity === undefined) {
    delete data[item];
  } else {
    const numQuantity = Number(quantity);
    if (isNaN(numQuantity)) {
      console.error('Unexpected request: nothing has been removed.');
      return;
    }
    if (numQuantity < 0) {
      // Behave like add command for negative values
      data[item] = (data[item] || 0) + Math.abs(numQuantity);
    } else {
      data[item] = (data[item] || 0) - numQuantity;
      if (data[item] <= 0) {
        delete data[item];
      }
    }
  }
  await writeJsonFile(filePath, data);
}

async function listItems(filePath) {
  const data = await readJsonFile(filePath);
  if (Object.keys(data).length === 0) {
    console.log('Empty list.');
  } else {
    for (const [item, quantity] of Object.entries(data)) {
      console.log(`- ${item} (${quantity})`);
    }
  }
}

function printHelp() {
  console.log('Commands:');
  for (const [command, description] of Object.entries(commands)) {
    console.log(`- ${command}: ${description}`);
  }
}

async function main() {
  const [,, filePath, command, ...args] = process.argv;

  if (!filePath || !command) {
    printHelp();
    return;
  }

  try {
    switch (command) {
      case 'create':
        await createFile(filePath);
        break;
      case 'delete':
        await deleteFile(filePath);
        break;
      case 'add':
        if (!args[0]) {
          console.error('No elem specified.');
          return;
        }
        await addItem(filePath, args[0], args[1]);
        break;
      case 'rm':
        if (!args[0]) {
          console.error('No elem specified.');
          return;
        }
        await removeItem(filePath, args[0], args[1]);
        break;
      case 'ls':
        await listItems(filePath);
        break;
      case 'help':
        printHelp();
        break;
      default:
        console.error('Unknown command. Use "help" to see available commands.');
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

main();