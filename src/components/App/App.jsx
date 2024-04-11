import { Provider } from "react-redux";
import { store } from "../../redux/store";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <SearchBox />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
