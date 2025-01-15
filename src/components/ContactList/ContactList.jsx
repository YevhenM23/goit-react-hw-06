import Contact from "../Contact/Contact"

const ContactList = ({contacts, onDeleteCard}) => {
    return (
        
        <ul>
            {contacts.map(contact => 
                <li key={contact.id}>
                <Contact contacts={contact} onDeleteCard={onDeleteCard}/>
                </li>
            )}
            
        </ul>
        
    )
        
}

export default ContactList;