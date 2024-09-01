import { rememberOldContacts } from '../utils/rememberOldContacts.js';

export const countContacts = async () => {
  const contactList = await rememberOldContacts();
  return contactList.length;
};

console.log(await countContacts());
