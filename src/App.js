import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './components/NavbarComp';
import TableComp from './components/TableComp';
import AddDeleteCopm from './components/AddDeleteCopm';

function App() {
  return (
    <div className="App">
      <header>
        <NavbarComp></NavbarComp>
      </header>
      <main>
        {/* <AddDeleteCopm></AddDeleteCopm> */}
        <TableComp></TableComp>
        <div id='test1'></div>
      </main>
    </div>
  );
}

export default App;
