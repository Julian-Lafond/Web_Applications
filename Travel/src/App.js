import logo from './logo.svg';
import './App.css';
import Header from './Header';
import data from './data';
import Nav from './Nav';

function App() {

  const map1 = data.map(item => {
    return(
      <Header 
        key = {item.id}
        item = {item}
      />
    );
  });
  return(
    <div>
      <Nav />
      <section className = "map1">
        {map1}
      </section>
    </div>
  )
}
  
export default App;
