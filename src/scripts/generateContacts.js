import { PATH_DB } from '../constants/contacts.js';
import {createFakeContact} from "../utils/createFakeContact.js";

const generateContacts = async (number) => {

    const items = Array(number).fill(0).map(()=>createFakeContact());
    console.log(items);

};

export const newContacts = generateContacts(2);

