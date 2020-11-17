import React from 'react';
import Tabs from "./components/Tabs"; 
import './App.css';

function App() {
  return (
    <div>
      <h1>Tabs</h1>
     <Tabs> 
       <div label="Primeiro TAB"> 
           1 Acesso, <em>Animal</em>! 
       </div> 
       <div label="Segundo TAB"> 
          Segundo Acesso, <em>Store</em>! 
       </div> 
       <div label="Terceiro TAB"> 
          Terceiro Acesso <em>Futebol</em>! 
       </div> 
     </Tabs> 
    </div>
  );
}
export default App;


