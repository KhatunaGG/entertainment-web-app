import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { GlobalState } from '../App';

const Root = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { getInputValue, setIconColor, icon } = context;


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
              <svg
                onClick={() => { setIconColor(1) }}
                width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0
               .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 
               1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 
               1-.4 1-1v-7c0-.6-.4-1-1-1Z" fill={icon === 1 ? '#ffffff' : '#5A698F'} /></svg>
            </Link>
          </li>
          <li>
            <Link to={'/movies'}>
              <svg
                onClick={() => { setIconColor(2) }}
                width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 
            3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 
            2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 
            17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 
            1-.74.74H16v-2h2v1.26Z" fill={icon === 2 ? '#ffffff' : '#5A698F'} /></svg>
            </Link>
          </li>
          <li>
            <Link to={'/tvseries'}>
              <svg
                onClick={() => { setIconColor(3) }}
                width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 
                13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                  fill={icon === 3 ? '#ffffff' : '#5A698F'} /></svg>
            </Link>
          </li>

          <li>
            <Link to={'/bookmark'}>
              <svg
                onClick={() => { setIconColor(4) }}
                width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 
              .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 
              1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 
              5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 
              0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 
              0h13.854Z" fill={icon === 4 ? '#ffffff' : '#5A698F'} /></svg>
            </Link>
          </li>
        </ul>
        <img className='avatar w-6 h-6' src="/assets/image-avatar.png" alt="" />
      </header>
      <div className='w-[91.46%] flex flex-col items-center justify-start gap-4  mb-4 md:gap-6  md:mb-8
      lg:flex-col lg:mt-10
      '>
        <div className='flex w-full flex-row justify-start ml-6 gap-4 lg:flex lg:flex-row lg:item-center lg:justify-start lg:w-full lg:ml-14 lg:gap-6 lg:border-b lg:border-[#5A698F] lg:pb-4'>
          <img className='w-6 h-6 md:h-8 md:w-8 bg-[var(--dark-blue)]' src="/assets/search.svg" alt="" />
          <input
            onChange={getInputValue}
            className='bg-[var(--dark-blue)] border-none outline-none' type="text" placeholder='Search for movies or TV series' />
        </div>
        <Outlet />
      </div>
    </section >
  );
};

export default Root;
