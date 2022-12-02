import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

import image1 from './assets/img/image1.jpg'
import image2 from './assets/img/image2.jpg'
import image3 from './assets/img/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Steve Jobs',
        image: image1,
    },
    {
        id: 2,
        title: 'Habitos de superacion',
        image: image2,
    },
    {
        id: 3,
        title: 'Inquebrantables',
        image: image3
    }
]


function App () {
  return (
    <div>
    <Navbar />
    <Cards itemList={cards}/>
    <Footer />
    </div>
    
  );


}

export default App;
