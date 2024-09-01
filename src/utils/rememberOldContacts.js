import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
 
export const rememberOldContacts = async () => {
  const contactList = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  return contactList;
};

