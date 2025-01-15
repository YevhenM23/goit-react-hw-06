import { useEffect, useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import ContactForm from '../src/components/ContactForm/ContactForm'
import SearchBox from '../src/components/SearchBox/SearchBox'
import ContactList from '../src/components/ContactList/ContactList'

const DEFAULT_CONTACTS = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]

const loadContactsFromStorage = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : DEFAULT_CONTACTS;
};

const saveContactsToStorage = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};


function App() {
    const [contacts, setContacts] = useState(() => {
    const loadedContacts = loadContactsFromStorage();
    return loadedContacts.length === 0 ? DEFAULT_CONTACTS : loadedContacts;
  });
     

  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length === 0) {
      setContacts(DEFAULT_CONTACTS); 
    }
    saveContactsToStorage(contacts);
  }, [contacts]);
  

  const filteredContacts = contacts.filter(cont =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  )

  const addNewCard = (newCard) => {
    setContacts(prev => [...prev, { ...newCard, id: nanoid() }])
  }

  const deleteCard = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  }
  

  return (
    <>
        <h1>Phonebook</h1>
      <ContactForm  addNewCard={addNewCard} />
      <SearchBox filter={filter} onFilterChange={setFilter} />
      <ContactList contacts={filteredContacts} onDeleteCard={deleteCard} />
    </>
  );
}

export default App;



