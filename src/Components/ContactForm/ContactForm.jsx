import { useState } from "react";
import { Form, Input, Label, ButtonAdd } from "./ContactForm.styled";
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from "../../Redux/contactsApi";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addCon] = useAddContactMutation();
  const { data: prevContacts } = useFetchContactsQuery();
  const reset = () => {
    setName("");
    setNumber("");
  };

  const inputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const addContact = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      number,
    };
    const findContacts = prevContacts.find((contact) => contact.name === name);
    !findContacts
      ? addCon(contactData)
      : alert(`${name} is already in contact`);
    reset();
  };

  return (
    <Form onSubmit={addContact}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          onChange={inputChange}
          value={name}
          placeholder="New contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        Tel:
        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="New contact number"
          onChange={inputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </Form>
  );
}
