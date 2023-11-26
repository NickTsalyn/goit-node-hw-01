import * as contactService from "./contacts.js";

const invokeAction = async ({ action, contactId, name, phone, email}) => {
	switch (action) {
		case "list":
			const allContacts = await contactService.listContacts();
		// return console.log(allContacts)
		case "getById":
			const contactById = await contactService.getContactById(contactId);
		// return console.log(contactById);
		case "add":
			const addContact = await contactService.addContact({ phone, name, email });
			// return console.log(addContact);
        case "remove":
            const removeContact = await contactService.removeContact(contactId)  
            return console.log(removeContact)  
        default:
            console.log("Unknown action")
	}
};

// invokeAction({action: "list"})
// invokeAction({action: 'getById', contactId: "05olLMgyVQdWRwgKfg5J6"})
// invokeAction({
//     action: "add",
//     name: "Nick Tsalyn",
//     phone: "(470) 334-2293",
//     email: "nicktsalyn@gmail.com",
//   });
invokeAction({action: "remove", contactId: "-dJ13oxeEPGmdLAkiH2q6"})

