import Error404 from 'components/errors/Error404'
import store from './store'
import { Provider } from 'react-redux'
import Home from 'pages/Homes'
import Gourtmines from 'pages/Gourtmines'
import Agregar from 'components/Agregar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/Gourtmines" element={<Gourtmines/>} />
          <Route path="/Gourtmines/Agregar" element={<Agregar/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
