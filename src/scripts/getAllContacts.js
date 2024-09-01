import {rememberOldContacts} from "../utils/rememberOldContacts.js";
export const getAllContacts = async () => {
  const contactList = await rememberOldContacts();
  return contactList;
};

console.log(await getAllContacts());
