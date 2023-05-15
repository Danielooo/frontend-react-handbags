import React from 'react';
import './App.css';
import {logDOM} from "@testing-library/react";
import Button from "./components/Button.js";
import Product from "./components/Product.js";
import Tile from "./components/Tile.js";

import bagOne from './assets/bag_1.png';
import bagTwo from './assets/bag_2.png';
import bagThree from './assets/bag_3.png';
import bagFour from './assets/bag_4.png';

import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';



function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button text='to the collection'/>
        <Button text='shop all bags'/>
        <Button
          text='pre-orders'
          disabled={true}
        />
      </nav>

      <main>
        <Product
          type='Best seller'
          link={bagOne}
          name='The handy bag'
          price='€400,-'
        />
        <Product
          type='Best seller'
          link={bagTwo}
          name='The stylish bag'
          price='€250,-'
        />
        <Product
          type='Best seller'
          link={bagThree}
          name='The simple bag'
          price='€150,-'
        />
        <Product
          type='Best seller'
          link={bagFour}
          name='The trendy bag'
          price='€300,-'
        />



      </main>

      <footer>
        <span>
          <Tile title='The Brand'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, similique.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, modi.</p>
          </Tile>
          <Tile link={brand}/>
        </span>

        <span>
          <Tile link={ourStory}/>
          <Tile title='Our Story'>
              <p>'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur exercitationem hic iure maiores nam placeat quo unde ut veniam.'</p>
          </Tile>
        </span>

      </footer>

    </>
  );
}

export default App;



