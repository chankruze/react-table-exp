import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
import { SortingTable } from "./components/SortingTable";

function App() {
  return (
    <div className="App">
      <FilteringTable />
      {/* <BasicTable />
      <SortingTable /> */}
    </div>
  );
}

export default App;
