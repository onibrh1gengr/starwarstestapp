import './App.scss';
import {Routes, Route} from "react-router-dom";
import MasterComponent from './Routes/Master.component/Master.component';
import Navigation from './Routes/Navigation.component/Navigation.component';
import DetailsComponent from './Routes/Details.Component/Details.Component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={ <MasterComponent/>} />
          <Route path='details' element={<DetailsComponent />} />
        </Route>
      </Routes>

    </div>
);
}

export default App;
