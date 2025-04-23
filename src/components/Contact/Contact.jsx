import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <p className={css.name}>{contact.name}</p>
      <p className={css.number}>{contact.number}</p>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
