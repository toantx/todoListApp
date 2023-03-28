import '../styles/globals.css'

import { ToDoListProvider } from '../context/ToDolistApp'

const App = ({ Component, pageProps }) => (
  <ToDoListProvider>
    <div>
      <Component {...pageProps} />
    </div>
  </ToDoListProvider>
)

export default App;