import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch } from "react-redux";
import { selectIsLoading, selectError } from "./redux/contactsSlice.js";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <div>loading...</div>}
        {error && <div>{error}</div>}
        <ContactList />
      </div>
    </>
  );
}

export default App;
