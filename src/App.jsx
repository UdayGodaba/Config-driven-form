import "./App.css";
import Form from "./components/Form";
import { studentForm, feedbackForm, contactForm } from "./utils/formConfig";

function App() {
  return (
    <>
      <Form formConfig={contactForm} />
    </>
  );
}

export default App;
