import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { GlobalState } from '../App';

const Root = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { getInputValue } = context;


  return (
    <section className='root w-full flex items-center flex-col bg-[var(--dark-blue)] 
    
    lg:flex-row lg:items-start lg:[850px]
    
    '>
      <header className="nuvBar w-full flex item-center bg-[var(--semi-dark-blue)] px-[3.19%] md:w-[91.46%] 
      items-center justify-between mb-6 md:mb-[33px] md:rounded-[10px] md:mt-[23px] 
      
      lg:w-[96px] lg:h-[800px] lg:flex-col lg:py-9 lg:px-0 lg:mb-0 lg:ml-3 ">
        <img className='logo' src="/assets/logo.svg" alt="" />
        <ul className='link-ul flex flex-row items-center gap-6 py-[18px] lg:flex-col lg:gap-10 lg:h-full lg:pt-[74px]'>
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
          <li>
            <Link to={'/bookmark'}>
              <img src="/assets/icon-nav-bookmark.svg" alt="" />
            </Link>
          </li>
        </ul>
        <img className='avatar w-6 h-6' src="/assets/image-avatar.png" alt="" />
      </header>

      <div className='w-[91.46%]  flex items-center justify-start gap-4  mb-4 md:gap-6  md:mb-8

      lg:flex-col lg:mt-10
      '>

        <div className='lg:flex lg:flex-row lg:item-center lg:justify-start lg:w-full lg:ml-14 lg:gap-6 lg:border-b lg:border-[#5A698F] lg:pb-4'>
          <img className='w-6 h-6 md:h-8 md:w-8 bg-[var(--dark-blue)]' src="/assets/search.svg" alt="" />
          <input
            onChange={getInputValue}
            className='bg-[var(--dark-blue)] border-none outline-none' type="text" placeholder='Search for movies or TV series' />
        </div>



        <Outlet />
      </div>

    </section>
  );
};

export default Root;
