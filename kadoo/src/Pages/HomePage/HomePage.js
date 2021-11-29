import React, { useEffect, useState } from 'react';
import "./HomePage.css";
import Navbar from "../../Components/Navbar/Navbar";
import ShowPlants from '../../Components/ShowProduct/ShowPlants';
import ShowTools from '../../Components/ShowProduct/ShowTools';
import Pagination from '@mui/material/Pagination';

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
        <div className="home_elements">
        <Navbar/>
        <ShowPlants data={this.state.setPlants}/>
        <ShowTools tooldata={this.state.setTools}/>
        <Pagination className="pagination_center" count={5} />
        </div>
      )
    }
  }

export default HomePage;