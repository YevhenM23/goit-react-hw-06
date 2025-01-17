import { createSlice } from "@reduxjs/toolkit";

const contactsReducer = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filters: {
      name: "",
    },
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
      // ...state,
      // items: [...state.items, action.payload],
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      // return {
      //   ...state,
      //   items: state.items.filter((contact) => contact.id !== action.payload),
      // };
    },
  },
});

export const { addContact, deleteContact } = contactsReducer.actions;
export default contactsReducer.reducer;

export const selectContacts = (state) => state.contacts.items;
// export const selectFilter = (state) => state.name;
