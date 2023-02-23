import { ThemeProvider } from '@mui/system';
import lightTheme from './Theme/lightTheme.js';
import darkTheme from './Theme/darkTheme.js'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './Components/NavBar.js';
import FirstPage from './Pages/FirstPage.js';



function App() {

  const { mode } = useSelector((state) => state.Mode)


  return (
    <>
      <ThemeProvider theme={!mode ? lightTheme : darkTheme}>
       <FirstPage />
      </ThemeProvider>
    </>
  );
}

export default App;
