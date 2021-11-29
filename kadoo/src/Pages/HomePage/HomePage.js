import React, { useEffect, useState } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import ShowPlants from '../../Components/ShowProduct/ShowPlants';
import ShowTools from '../../Components/ShowProduct/ShowTools';
import Pagination from '../../Components/Pagination/Pagination';
import axios from 'axios';

class HomePage extends React.Component {
    state = {
      setPlants: [],
      setTools: []
    };
  componentDidMount() {
          fetch('http://127.0.0.1:8000/api/plantsList/')
          .then((response) => response.json())
          .then(
          (data) => {
            this.setState({
              setPlants: data
            });
          })
          fetch('http://127.0.0.1:8000/api/toolsList/')
          .then((response) => response.json())
          .then(
          (Tooldata) => {
            this.setState({
              setTools: Tooldata
            });
          })
        }
    
  render() {
      return(
        <div>
        <Navbar/>
        <ShowPlants data={this.state.setPlants}/>
        <ShowTools tooldata={this.state.setTools}/>
        </div>
      )
    }
  }

export default HomePage;