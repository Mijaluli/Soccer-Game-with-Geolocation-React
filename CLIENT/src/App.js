import MapContainer from "./components/Map"
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducer'
import './App.css';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <MapContainer/>
    </Provider>
  );
}

export default App;
