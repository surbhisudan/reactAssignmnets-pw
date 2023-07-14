
import './App.css';
import Person from "./components/Person";
import Button from "./components/Button";
import Head from "./components/Head";
import List from "./components/List";

function App() {
  function handleClick(){
    console.log("button clicked")
  }
  const item = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <div>
   
    <Person name="Surbhi" age="20"></Person>
    <Button text="click me" onClick={handleClick} />
    <Head title="I am header" ></Head>
    <List items={item}></List>
    </div>
);
}

export default App;
