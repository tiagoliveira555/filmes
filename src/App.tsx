import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
