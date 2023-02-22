import { ThemeProvider } from '@mui/system';
import lightTheme from './Theme/lightTheme.js';
import darkTheme from './Theme/darkTheme.js'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './Components/NavBar.js';



function App() {

  const { mode } = useSelector((state) => state.Mode)


  return (
    <>
      <ThemeProvider theme={!mode ? lightTheme : darkTheme}>
       <NavBar />
      </ThemeProvider>
    </>
  );
}

export default App;
