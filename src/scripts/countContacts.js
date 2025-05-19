import { readContacts } from "../utils/readContacts.js";
export const countContacts = async () => {
  const contacts = await readContacts();
  return contacts.length;
};

const main = async () => {
    const allContacts = await countContacts();
    console.log(allContacts);
};
main();
