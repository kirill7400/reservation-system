import './assets/style/App.scss';
import React from 'react';
import Main from "./components/Main";
import {Route, Router, Routes} from "react-router-dom";
import TrainSelection from "./components/TrainSelection/TrainSelection";
import SeatSelection from "./components/SeatSelection/SeatSelection";
import Passengers from "./components/Passengers/Passengers";
import Payment from "./components/Payment/Payment";
import Finish from "./components/Finish/Finish";

function App() {
  document.title = 'Система бронирования';

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={ <Main/> } />
        <Route path="/train-selection" exact element={ <TrainSelection/> } />
        <Route path="/seat-selection" exact element={ <SeatSelection/> } />
        <Route path="/passengers" exact element={ <Passengers/> } />
        <Route path="/payment" exact element={ <Payment/> } />
        <Route path="/finish" exact element={ <Finish/> } />
        <Route path="*" element={ <div>404 Not Found</div> } />
      </Routes>
    </div>
  );
}

export default App;
