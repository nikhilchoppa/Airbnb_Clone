import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteCurrentUser, deleteToken, getCurrentUser } from '../utills/storage-utills';
import { toast } from "react-toastify";
const HeaderCard = ({setProfile}) => {

    const navigate=useNavigate()
    const onLogout=()=>{
 toast.success(`${getCurrentUser().name} loggged out sucessfully`,{
        position:"bottom-right"
    })

        deleteToken();
        deleteCurrentUser();
        navigate("/")
    }

    const {contact, email} = getCurrentUser();

  return (
    <div className="Headercard">
      <ul>
        <li>
            {contact}
        </li>
        <li>
          {email}
        </li>
        <li onClick={() => setProfile(true)}>
          Change DP
        </li>
        <li onClick={onLogout}>
          <button >Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderCard;