import React, { useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { BsPinAngle } from "react-icons/bs";
import BlogCard from '../../components/BlogCard/BlogCard.jsx'
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import Profile from '../../components/Profile&CoverImage/Profile.jsx';
import CoverImage from '../../components/Profile&CoverImage/CoverImage.jsx';
import { MdVisibility } from 'react-icons/md';

const AccountDetails = () => {
    const [photoBoxOpen, setPhotoBoxOpen] = useState(false)
    const [coverBoxOpen, setCoverBoxOpen] = useState(false)

  return (
    <>
        <div className='absolute w-full h-full '  >
            {
                coverBoxOpen && (
                    <div className='bg absolute top-0  w-full h-full z-20' >
                        <div className='absolute top-custom-top left-custom-left z-30 h-auto w-auto  '>
                            <CoverImage close={()=>setCoverBoxOpen(!coverBoxOpen)}/>
                        </div>
                    </div>
                )
            }

            {
                photoBoxOpen && (
                    <div className='bg absolute top-0  w-full h-full z-20 ' >
                        <div className='absolute z-20 top-custom-top left-custom-left h-auto'>
                        <Profile close={()=>setPhotoBoxOpen(!photoBoxOpen)}/>
                        </div>
                    </div>
                    
                )
            }
            
        <div className='grid justify-items-center -z-20' >
                {/* user info */}  
            <div className='h-auto w-custom-account-sec-width bg-zinc-950 relative rounded-lg border-x-2        border-b-2 border-gray-500 '>
                <div className=' h-52 w-full bg-blue-200 relative  rounded-t-lg'>
                    <div className='absolute right-6 top-8 bg-white h-8 w-8 content-center rounded-full z-10 cursor-pointer' onClick={()=>setCoverBoxOpen(!coverBoxOpen)}><FaCamera className='mx-auto'/></div>
                    <div className='h-full w-full '>
                        <img src="images/mountain.avif" alt=""  className='object-fill w-full h-full rounded-t-lg' />
                    </div>
                </div>
                <div className='w-32 h-32 absolute top-32 px-8 '>
                    <div className='h-32 w-32 bg-white p-1 cursor-pointer rounded-full' onClick={()=>setPhotoBoxOpen(!photoBoxOpen)}>
                        <img src="images/photo-modified.png" alt="" />
                    </div>
                </div>
                <div className='flex justify-between px-8 pt-14 text-gray-500 '>
                    <div className='flex-row basis-left-account-basis '>
                        <div className='text-3xl font-bold'>@anurag24</div>
                        <div className='text-xl font-bold'>Anurag Yadav</div>
                        <div className='flex space-x-2'>
                            <div className='font-semibold'>Email:</div>
                            <div> anurag@gmail.com</div>
                        </div >
                        <div className='flex-row '>
                            <div className='flex space-x-4 font-semibold'>
                                <div className='content-center'>About:</div>
                                <div className='content-center text-2xl font-semibold'> <BsPinAngle/></div>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla unde tenetur reiciendis quidem iusto. Delectus ea inventore odio incidunt fugiat.</div>
                        </div>
                    </div>
                    <div className='flex-row basis-right-account-basis space-y-4'>
                        <div className=''>
                            <button className='bg-follow-button px-6 py-1 rounded-full text-gray-800'>follow</button>
                        </div>
                        <div className='flex space-x-2'>
                            <div>followers: </div>
                            <div>100k</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex space-x-4 px-8 py-8'>
                        <button className=' px-5 py-1 bg-gray-700 text-slate-950 font-bold rounded-full text-nowrap'>Today</button>
                        <button className='px-5 py-1 bg-transparent text-gray-500 font-bold rounded-full border-2 border-gray-500 text-nowrap'>Recent Posts</button>
                        <button className='px-5 py-1 bg-transparent text-gray-500 font-bold rounded-full border-2 border-gray-500 text-nowrap'>All Posts</button>
                    </div>
                </div>

            </div>
                {/* user all posts */}
            <div className='flex-row w-custom-account-sec-width my-8 border-2 border-gray-500 rounded-lg'>
                <div className='flex gap-8 flex-wrap p-8'>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/> 
                </div>
                <div className='relative my-8'>
                    <div className='flex px-8 space-x-2  text-gray-500 font-bold absolute bottom-2 right-4'>
                        <div className='content-center text-2xl'><CiCircleChevLeft/></div>
                        <div className='content-center'>1</div>
                        <div className='content-center text-2xl'><CiCircleChevRight/></div>
                    </div>
                </div>
            </div>
        </div>
        
     </div>
    </>
  )
}

export default AccountDetails