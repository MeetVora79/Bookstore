import './App.css';
import HomePage from './components/HomePage';
import BooksList from './components/BooksList';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from './components/PageNotFound'; 
import { GlobalStyles } from './styles/globalStyles';
import Form from './components/Form';
import Login from './pages/Login';
import { ThemeProvider, createTheme } from '@mui/material';
import { ToastContainer } from 'react-toastify';

function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "red",
          },
        },
      },
    },
  });

  return (
   <>    
   <img src={`${process.env.REACT_APP_BASE_URL}/logo192.png`} alt="logo"/>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <ToastContainer />
       <div style={{...GlobalStyles.navbar,}}>
      <NavLink to='/'> Home</NavLink>
      <NavLink to='/BookList'> BooksList </NavLink>
      <NavLink to='/form'> Form </NavLink>
       </div>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/home' element={<HomePage username={'Meet'} />}></Route>
          <Route path='/BookList' element={<BooksList />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </>
  );
}

export default App;
