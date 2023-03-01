
import React from 'react';
import { Header } from "./components/header/Header"
import { Items } from "./components/items/Items"
// import { Filter } from "./components/filter/Filter"
import { Footer } from "./components/footer/Footer"
// import { ShopCardAdd } from "./components/shopCardAdd/ShopCardAdd"

function App() {
  return (
    <React.Fragment>
        <Header/>
          {/* <Filter/> */}
          <Items/>
          {/* <ShopCardAdd/> */}
        <Footer/>
    </React.Fragment>
  );
}

export default App;
