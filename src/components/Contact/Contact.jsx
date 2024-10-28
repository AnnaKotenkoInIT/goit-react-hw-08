import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactItem}>
      <div className={s.contactCard}>
        <p className={s.contactTitle}>
          <FaUser className={s.contactIcon} />
          {contact.name}
        </p>
        <p className={s.contactTitle}>
          <FaPhoneAlt className={s.contactIcon} />
          {contact.number}
        </p>
      </div>
      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
