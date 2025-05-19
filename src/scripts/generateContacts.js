import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
const generateContacts = async (number) => {
    const contacts = [];
    for (let i = 0; i < number; i++) {
        const contact = createFakeContact();
        contacts.push(contact);
    }

    try {
        const allContacts = await readContacts();
       allContacts.push(...contacts);
        await writeContacts(allContacts);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
   
};

generateContacts(5);
