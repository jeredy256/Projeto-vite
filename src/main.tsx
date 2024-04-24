import ReactDOM from 'react-dom/client'
// Router dom 
import { BrowserRouter as Router  } from 'react-router-dom'
import Main from './componets/compon/main/index.tsx'
import "./index.css"



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Main />

  </Router> ,
)
