import { useSelector } from "react-redux";
import { ButtonDelete, ContactItem, List } from "./ContactList.styled";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../Redux/contactsApi";
import { getFilter } from "../../Redux/selectors";

export default function ContactList() {
  const { data, isFetching, isError } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {isError && <p>Упс, что то пошло не так</p>}
      {isFetching && <p>Loading...</p>}
      {data &&
        !isFetching &&
        visibleContacts().map((contact) => {
          return (
            <ContactItem key={contact.id}>
              {contact.name} : {contact.number}
              <ButtonDelete
                type="submit"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </ButtonDelete>
            </ContactItem>
          );
        })}
    </List>
  );
}
