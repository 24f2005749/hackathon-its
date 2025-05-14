import React from 'react'
import Spline from '@splinetool/react-spline';


const LandingPage = () => {
  return (
    <div className=' h-full w-full'>
        <div className='flex'>
            <div className='w-1/2 h-full  flex flex-col gap-52 pt-10 px-10 pl-40'>
            <div className='w-full h-56 bg-gray-400 rounded-xl p-3'>
              <div>
                <div className='font-bold'>Journaling</div>
              <img src="./public/diary.png" alt="" />
              </div>
              <div>A diary that reflects your personality and support your thoughts..</div>
             
            </div>
             <div className='w-full h-56 bg-gray-400 rounded-xl p-3 flex flex-col-reverse'>
              <div>
              </div>
              <div>face to face video and chat support with stranger</div>
                <div className='font-bold'>peer support</div>
              <img src="./public/diary.png" alt="" />
             
            </div>
        </div>
            <div className='w-1/2 h-full  flex flex-col gap-52 pt-10 px-10 pr-40'>
            <div className='w-full h-56 bg-gray-400 rounded-xl p-3'>
              <div>
                <div className='font-bold'>Journaling</div>
              <img src="./public/diary.png" alt="" />
              </div>
              <div>A diary that reflects your personality and support your thoughts..</div>
             
            </div>            <div className='w-full h-56 bg-gray-400 text-end rounded-xl p-3'>Quick q/a</div>
        </div>
        </div>
        <div className='w-96 h-96 rounded-full bg-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center'>
      



        </div>
       <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] '>
        <Spline scene="https://prod.spline.design/REoRrWqlpTsK1jK4/scene.splinecode" />

    </div>
        
        
    </div>
  )
}

export default LandingPage