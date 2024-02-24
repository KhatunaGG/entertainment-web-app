import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TVSeries from './Pages/TVSeries';
import Bookmark from './Pages/Bookmark';
import Root from './Pages/Root';
import { createContext, useState, useEffect } from 'react';
import data from './data.json';
import { IData } from './interface';


type GlobalStateType = {
  screenWidth: number;
  setBookmarked: React.Dispatch<React.SetStateAction<boolean>>;
  bookmarked: boolean;
  handleBookmarcked: (title: string) => void;
  newData: IData[];
  // filtredData: IData
  getInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  setIconColor: (num: number) => void
  icon: number;
};

export const GlobalState = createContext<GlobalStateType | null>(null);

const App: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [input, setInput] = useState('');
  const [newData, setNewData] = useState<IData[]>(data)
  const [icon, setIcon] = useState(0)

  const setIconColor = (num: number) => {
    setIcon(num)
  }


  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };


  const handleBookmarcked = (title: string) => {

    setNewData(
      newData.map((item) => {
        if (item.title === title && item.isBookmarked === false) {
          return { ...item, isBookmarked: true };
        } else if (item.title === title && item.isBookmarked === true) {
          return { ...item, isBookmarked: false };
        }
        return item;
      })
    );
  };


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvseries' element={<TVSeries />} />
        <Route path='/bookmark' element={<Bookmark />} />
      </Route>
    )
  );


  return (
    <div className='App w-full h-screen flex flex-col items-center bg-[#10141E] '>
      <GlobalState.Provider
        value={{
          screenWidth,
          setBookmarked: () => { },
          bookmarked: false,
          handleBookmarcked,
          newData,
          getInputValue,
          input,
          setIconColor,
          icon
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </GlobalState.Provider>
    </div>
  );
};

export default App;
