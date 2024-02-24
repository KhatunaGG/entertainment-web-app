import { useContext } from 'react'
import { GlobalState } from '../App'
import Card from '../components/Card';


const Bookmark = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { newData, input } = context;
  const bookmarkedData = newData.filter((el) => el.isBookmarked === true);


  return (
    <div className='w-[91.46%] text-sm md:text-[32px] mb-4 md:mb-6 lg:mb-8'>
      <h2 className='text-sm md:text-[32px] mb-4 md:mb-6'>Bookmarked</h2>
      <div className="grid grid-cols-2 gap-8  md:grid-cols-3 lg:grid-cols-4">


        {
          bookmarkedData.filter((el) => el.title.toLowerCase().startsWith(input)).map((item, i) => (
            <Card key={i} dataItem={item} />
          ))

        }



        {/* {newData.filter((el) => el.isBookmarked === true).map((item, i) => (
          <Card key={i} dataItem={item} />
        ))} */}


      </div>
    </div>
  )
}

export default Bookmark