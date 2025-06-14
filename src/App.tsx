import { Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import Play from "./pages/Play";
import OutputScreen from "./pages/OutputScreen";
import InputScreen from "./pages/InputScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<InputScreen />} />
        <Route path="/results" element={<OutputScreen />} />
        <Route path="/play" element={<Play />} />
      </Route>
    </Routes>
  );
}

export default App;
