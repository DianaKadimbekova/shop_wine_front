import "./App.css";
import { ShopWineFooter } from "./components/Footer/ShopWineFooter";
import { ShopWineHeader } from "./components/Header/ShopWineHeader";
import { ShopWineList } from "./components/List/ShopWineList.tsx";

function App() {
  return (
    <>
      <ShopWineHeader />
      <ShopWineList />
      <ShopWineFooter />
    </>
  );
}

export default App;
