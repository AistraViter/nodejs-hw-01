import { createFakeContact } from '../utils/createFakeContact.js';
import { rememberOldContacts } from '../utils/rememberOldContacts.js';
import { updateContacts } from '../utils/updateContacts.js';


export const addOneContact = async () => {
  const contactList = await rememberOldContacts();
  const newContact = createFakeContact();
  contactList.push(newContact);
  await updateContacts(contactList);
};

addOneContact();
