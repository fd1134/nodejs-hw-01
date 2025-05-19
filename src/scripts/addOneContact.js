import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
export const addOneContact = async () => {
  const newContact = createFakeContact();
  try {
    
    const allContacts = await readContacts();
    allContacts.push(newContact);
    await writeContacts(allContacts);
   
  } catch (error) {
    console.error('Error importing contacts:', error);
  }
};

addOneContact();
