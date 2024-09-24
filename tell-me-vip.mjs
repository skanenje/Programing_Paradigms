// tell-me-vip.mjs

import { readdir, readFile, writeFile } from 'fs/promises';
import { resolve, join } from 'path';

const readGuestFile = async (dirPath, filename) => {
  const filePath = join(dirPath, filename);
  const content = await readFile(filePath, 'utf8');
  const guest = JSON.parse(content);
  const [firstName, lastName] = filename.slice(0, -5).split('_');
  return {
    firstName,
    lastName,
    answer: guest.answer
  };
};

const sortGuests = (guests) => {
  return guests.sort((a, b) => {
    const lastNameComparison = a.lastName.localeCompare(b.lastName);
    return lastNameComparison !== 0 ? lastNameComparison : a.firstName.localeCompare(b.firstName);
  });
};

const formatGuestList = (guests) => {
  return guests.map((guest, index) => {
    return `${index + 1}. ${guest.lastName} ${guest.firstName}`;
  }).join('\n');
};

const main = async () => {
  const dirPath = process.argv[2] ? resolve(process.argv[2]) : process.cwd();

  try {
    const files = await readdir(dirPath);
    const guestPromises = files
      .filter(file => file.endsWith('.json'))
      .map(file => readGuestFile(dirPath, file));

    const guests = await Promise.all(guestPromises);
    const vipGuests = guests.filter(guest => guest.answer.toLowerCase() === 'yes');
    const sortedVips = sortGuests(vipGuests);
    const formattedList = formatGuestList(sortedVips);
    
    await writeFile('vip.txt', formattedList);
    console.log(formattedList);  // Print to console for the test
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

main().catch(error => {
  console.error(`Unhandled error: ${error.message}`);
  process.exit(1);
});