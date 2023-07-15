import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./Components/Todo.jsx";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./styl.module.css";
import { Box, Button } from "@chakra-ui/react";

function App() {
  const [item, setitem] = useState([]);
  const [c, setc] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8001/Product")
      .then(({ data }) => {
        console.log(data);
        setitem([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Todo />

      {/* Products
      <div className={style.containr}>
      {item.length ==0 ? (<h3>Loading</h3>):(item.map((e,ind)=>(
        <Box display={'flex'} key={ind}>
         <div>
           <p>{e.description}</p>
          {console.log(e)}
          <img m={'auto'} src={e["im-url"]}/>
         </div>
          <Button  colorScheme='teal' variant='solid'>Buy</Button>
        </Box>
      )))}
      </div> */}
    </div>
  );
}

export default App;
