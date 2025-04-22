import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { fetchContacts } from "../../redux/contactsOps";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
