import React, { useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { BsPinAngle } from "react-icons/bs";
import Profile from '../../components/Profile&CoverImage/Profile.jsx';
import CoverImage from '../../components/Profile&CoverImage/CoverImage.jsx';
import { NavLink } from 'react-router-dom';
import UserBlogContainer from '../../components/BlogContainer/UserBlogContainer.jsx';

const AccountDetails = () => {
    const [photoBoxOpen, setPhotoBoxOpen] = useState(false)
    const [coverBoxOpen, setCoverBoxOpen] = useState(false)

    const style = {
        height: photoBoxOpen || coverBoxOpen?"60vh":"auto",
        overflow: photoBoxOpen || coverBoxOpen?"hidden":"auto"
    }

  return (
    <>
        <div className='account-details '>
            {
                coverBoxOpen && (
                    <div className='photobox ' >
                        <div className='photobox-box'>
                            <CoverImage close={()=>setCoverBoxOpen(!coverBoxOpen)}/>
                        </div>
                    </div>
                )
            }

            {
                photoBoxOpen && (
                    <div className='photobox ' >
                        <div className='photobox-box'>
                        <Profile close={()=>setPhotoBoxOpen(!photoBoxOpen)}/>
                        </div>
                    </div>
                    
                )
            }
            
        <div className='account-details-user' >
                {/* user info */}  
            <div className='account-details-user-info'>
                <div className='account-details-user-info-coverImage-section'>
                    <div className='account-details-user-info-coverImage-section-editCoverImage' onClick={()=>setCoverBoxOpen(!coverBoxOpen)}><FaCamera className='mx-auto'/></div>
                    <div className='account-details-user-info-coverImage-section-displayCoverImage'>
                        <img src="images/mountain.avif" alt=""  className='account-details-user-info-coverImage-section-CoverImage' />
                    </div>
                </div>
                <div className='account-details-user-info-profileImage-section'>
                    <div className='account-details-user-info-profileImage-section-view' onClick={()=>setPhotoBoxOpen(!photoBoxOpen)}>
                        <img src="images/photo-modified.png" alt="" />
                    </div>
                </div>
                <div className='account-details-user-info-about-user'>
                    <div className='account-details-user-info-about-user-details '>
                        <div className='account-details-user-info-about-user-details-username'>@anurag24</div>
                        <div className='account-details-user-info-about-user-details-fullName'>Anurag Yadav</div>
                        <div className='account-details-user-info-about-user-details-data'>
                            <div className='account-details-user-info-about-user-details-tag'>Email:</div>
                            <div> anurag@gmail.com</div>
                        </div >
                        <div >
                            <div className='account-details-user-info-about-user-details-data'>
                                <div className='account-details-user-info-about-user-details-tag'>About:</div>
                                <div className='account-details-user-info-about-user-details-pin'> <BsPinAngle/></div>
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla unde tenetur reiciendis quidem iusto. Delectus ea inventore odio incidunt fugiat.</div>
                        </div>
                    </div>
                    <div className='account-details-user-info-about-user-followers'>
                        <span className='account-details-user-info-about-user-followers-button'>follow</span>
                        <div className='account-details-user-info-about-user-followers-total-followers'>
                            <img src="images/flower.png" alt="" className='account-details-user-info-about-user-followers-total-followers-follower-image'/>
                            <span className='account-details-user-info-about-user-followers-total-followers-follower-value'>100k</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='account-details-user-info-about-user-posts'>
                        <button className='account-details-user-info-about-user-posts-button'>Today</button>
                        <button className='account-details-user-info-about-user-posts-button'>Recent Posts</button>
                        <button className='account-details-user-info-about-user-posts-button'>All Posts</button>
                    </div>
                </div>
                
            </div>
                {/* user all posts */}
                <div  className='account-details-user-posts'>
                <UserBlogContainer/>
                </div>
        </div>
        
     </div>
    </>
  )
}

export default AccountDetails