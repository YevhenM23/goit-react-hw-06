import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import s from './Contact.module.css'

const Contact = ({ contacts, onDeleteCard }) => {
    return (
        <div className={s.contactWrapper}>
            <FaUser /> {contacts.name}
            <FaPhone /> {contacts.number}
            <button className={s.btnDelete} onClick={() => onDeleteCard(contacts.id)}>Delete</button>
        </div>

    ) 
};

export default Contact;