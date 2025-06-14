import { Routes, Route } from "react-router";
import MainLayout from "./layout/MainLayout";
import Test from "./pages/Test";
import Play from "./pages/Play";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Test />} />
        <Route path="/play" element={<Play />} />
      </Route>
    </Routes>
  );
}

export default App;
