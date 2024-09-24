import { readFile, writeFile } from 'fs/promises';
import { basename, extname } from 'path';

async function encodeFile(inputFile, outputFile) {
  const data = await readFile(inputFile);
  const encoded = Buffer.from(data).toString('base64');
  await writeFile(outputFile, encoded);
}

async function decodeFile(inputFile, outputFile) {
  const data = await readFile(inputFile, 'utf8');
  const decoded = Buffer.from(data, 'base64');
  await writeFile(outputFile, decoded);
}

async function main() {
  try {
    const [,, inputFile, mode, customOutputFile] = process.argv;

    if (!inputFile || !mode) {
      throw new Error('Usage: node tell-it-cypher.mjs <inputFile> <encode|decode> [outputFile]');
    }

    if (mode !== 'encode' && mode !== 'decode') {
      throw new Error('Mode must be either "encode" or "decode"');
    }

    const defaultOutputFile = mode === 'encode' ? 'cypher.txt' : 'clear.txt';
    const outputFile = customOutputFile || defaultOutputFile;

    if (mode === 'encode') {
      await encodeFile(inputFile, outputFile);
      console.log(`File encoded and saved as ${outputFile}`);
    } else {
      await decodeFile(inputFile, outputFile);
      console.log(`File decoded and saved as ${outputFile}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();