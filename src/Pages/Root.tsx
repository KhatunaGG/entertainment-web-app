import { useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { GlobalState } from '../App';

const Root = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { getInputValue, newData } = context;
 

  return (
    <section className='root w-full flex items-center flex-col bg-[var(--dark-blue)] '>
      <header className="nuvBar w-full flex item-center bg-[var(--semi-dark-blue)] px-[3.19%] md:w-[91.46%] 
      items-center justify-between mb-6 md:mb-[33px] md:rounded-[10px] md:mt-[23px] ">
        <img className='logo' src="/assets/logo.svg" alt="" />
        <ul className='link-ul flex flex-row items-center gap-6 py-[18px] '>
          <li>
            <Link to={'/'}>
              <img src="/assets/icon-nav-home.svg" alt="" />
            </Link>
          </li>



          <li>
            <Link to={'/movies'}>
              <img src="/assets/icon-nav-movies.svg" alt="" />
            </Link>
          </li>







          <li>
            <Link to={'/tvseries'}>
              <img src="/assets/icon-nav-tv-series.svg" alt="" />
            </Link>
          </li>


          {/* <li>
            <Link to={'/tvseries'}
            onClick={() => setColor(1)}
            >
              
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 
              13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill={color === 1 ? '#ffffff' : '#5A698F'} /></svg>
            </Link>
          </li> */}







          <li>
            <Link to={'/bookmark'}>
              <img src="/assets/icon-nav-bookmark.svg" alt="" />
            </Link>
          </li>

          {/* <li>
            <Link to={'/bookmark'}
            onClick={() => setColor(0)}
            >
              <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 
                .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 
                .952.119C1.137.039 1.33 0 1.533 0h13.854Z" fill={color === 0 ? '#ffffff' : '#5A698F'} /></svg>
            </Link>
          </li> */}






        </ul>
        <img className='avatar w-6 h-6' src="/assets/image-avatar.png" alt="" />
      </header>
      <div className='w-[91.46%]  flex items-center justify-start gap-4  mb-4 md:gap-6  md:mb-8'>
        <img className='w-6 h-6 md:h-8 md:w-8 bg-[var(--dark-blue)]' src="/assets/search.svg" alt="" />
        <input
          onChange={getInputValue}
          className='bg-[var(--dark-blue)] border-none outline-none' type="text" placeholder='Search for movies or TV series' />
      </div>
      <Outlet />
    </section>
  );
};

export default Root;
