import React, { useEffect, useState } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import ShowProduct from '../../Components/ShowProduct/ShowProduct';


class HomePage extends React.Component {
    render() {
      
      return(
        <div>
        <Navbar/>
        <ShowProduct/>
        </div>
      )
    }
  }

export default HomePage;