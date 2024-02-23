import { GlobalState } from '../App'
import { useContext } from 'react'
import Card from '../components/Card';



const Movies = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { newData } = context;
  return (
    <div className='w-[91.46%] text-sm md:text-[32px] mb-4 md:mb-6 lg:mb-8'>
      <h2 className='text-sm md:text-[32px] mb-4 md:mb-6'>Movies</h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {newData.filter((el) => el.category === 'Movie').map((item, i) => (
          <Card key={i}  dataItem={item} />
        ))}
      </div>
    </div>
  )
}

export default Movies