import { Box } from '@mui/material'
import './App.css'
import { Header, Panel, TodoList, Footer } from './components/index'


const App = () => {
  return (
    <div className="App">
      <Box sx={
        {
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center', 
        }
      }
      >
        <Header />
        <Panel />
        <TodoList />
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
