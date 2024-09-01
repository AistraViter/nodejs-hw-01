import { createFakeContact } from '../utils/createFakeContact.js';
import { rememberOldContacts } from '../utils/rememberOldContacts.js';
import { updateContacts } from '../utils/updateContacts.js';

const generateContacts = async (number) => {
  const contactList = await rememberOldContacts();
  const newContacts = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  contactList.push(...newContacts);
  await updateContacts(contactList);
};

generateContacts(5);
