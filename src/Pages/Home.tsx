import { useContext } from 'react'
import { GlobalState } from '../App'
import Carusel from '../components/Carusel';
import Card from '../components/Card';


function Home() {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { newData } = context;
  return (
    <div className='w-[91.46%] bg-[var(--dark-blue)] '>
      <h2 className='text-sm md:text-[32px] mb-4 md:mb-6'>Trending</h2>
      <Carusel />
      <h2 className='text-sm mt-4 md:text-[32px] md:mt-0 mb-4 md:mb-6 lg:mb-8'>Recommended for you</h2>
      <div className="grid grid-cols-2 gap-8  md:grid-cols-3 lg:grid-cols-4">
        {newData.map((item, i) => (
          <Card dataItem={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Home