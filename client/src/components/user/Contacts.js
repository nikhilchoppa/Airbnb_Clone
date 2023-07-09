import React from 'react'
import BASE_URL from '../../utills/api-utill';

const Contacts = ({vendor}) => {
  const defaultDp = "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg";
  const ownDp = vendor?.profilePic;

  return (
    <div>
      <div className='con-text'>Contacts | 12</div>

      <div className='con-list'>
     <div className='contact'>
      <div className='con-img' ><img className='con-img1' src={ownDp? `${BASE_URL}/profile-images/${ownDp}`: defaultDp} alt="avatar"/></div>
     <div className='con-name'>contact1</div>
        <div className='con-num'>{vendor?.contact}</div>
     </div>
      </div>
    </div>
  )
}

export default Contacts
