import { rememberOldContacts } from '../utils/rememberOldContacts.js';
import { updateContacts } from '../utils/updateContacts.js';

export const removeLastContact = async () => {
  const contactList = await rememberOldContacts();
  contactList.pop();
  await updateContacts(contactList);
};

removeLastContact();
