import { useContext } from 'react'
import { GlobalState } from '../App'





const Card = ({ dataItem }: any) => {
   
    const context = useContext(GlobalState);
    if (!context) return null;
    const { screenWidth, handleBookmarcked } = context;


    return (
        <div key={dataItem.title} className="col-span-1 flex flex-col">
            <div className='w-full relative'>
                {screenWidth > 375 ? (
                    <img className='rounded-lg' src={dataItem.thumbnail.regular.medium} alt="" />
                )
                    : screenWidth > 768 ? (
                        <img className='rounded-lg' src={dataItem.thumbnail.regular.large} alt="" />
                    ) :
                        <img className='rounded-lg' src={dataItem.thumbnail.regular.small} alt="" />
                }
                <div
                    onClick={() => handleBookmarcked(dataItem.title)}
                    className='absolute top-[4.84%] right-[4.84%]  w-8 h-8 bg-[#5A698F] rounded-full flex items-center justify-center'>

                    {dataItem.isBookmarked
                        ? <img className='' src="/assets/icon-bookmark-full.svg" alt="" />
                        : <img className='' src="/assets/icon-bookmark-empty.svg" alt="" />
                    }
                </div>
            </div>
            <div className="info  flex flex-col flex-start">
                <div className="etails flex flex-row items-center gap-2 justify-start mb-1">
                    <div className="year text-xs">{dataItem.year}</div>
                    <div className="category flex flex-row items-center gap-2">
                        <span className='w-1 h-1 rounded-full bg-[#979797]'></span>
                        <img src="/assets/icon-nav-movies.svg" alt="" className="categori-icon w-[10px] h-[10px] md:w-[12px] md:h-[12px]" />
                        <span className='text-xs'>{dataItem.category}</span>
                    </div>
                    <div className='flex flex-row items-center gap-[11px]'>
                        <span className='w-1 h-1 rounded-full bg-[#979797]'></span>
                        <div className="rating text-xs">{dataItem.rating}</div>
                    </div>
                </div>
                <h3 className='title text-[15px] w-full text-left '>{dataItem.title}</h3>
            </div>
        </div>
    )
}

export default Card
