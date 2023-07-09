import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CardItem from "./CardItem";
import BASE_URL from "../../utills/api-utill";
import { getCurrentUser, setCurrentUser } from "../../utills/storage-utills";
import { toast } from "react-toastify";
import { UserSelectedProposal } from "../../contexts/UserContext";
const Scard = ({ item }) => {

  const { onDeleteList } = useContext(UserSelectedProposal);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const delteselect = (id, name) => {
    axios
      .put(`${BASE_URL}/delete-list/${getCurrentUser()._id}`, {
        selected: id,
      })
      .then((res) => {
        if (res.data.status === "completed") {
          toast.info(`${name} removed from selected`, {
            position: "bottom-right"
          });
          console.log("on delete : ", res.data.data.selected)
          setCurrentUser(res.data.data);
          onDeleteList({ _id: id });
          setConfirmDelete(false)

        } else {
          alert(res.data.message)
        }

      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="scard-list">

      <div className="cardslist">
        <CardItem
          key={item?._id}
          id={item?._id}
          imageSrc={item?.images[0]}
          title={item?.eventName}
          price={item?.budget}
          locatioin={item?.placeOfEvent}
        />
        <div className="del-icon" onClick={() => setConfirmDelete(true)}>
          <ion-icon name="trash-outline"></ion-icon>
        </div>
        {confirmDelete && <div className="delete-confirmation" >
          <p>Are you sure!<br /> Do you want to delete?</p>
          <div className="btns">
            <button onClick={() => {
              delteselect(item?._id, item?.eventName)
            }}>YES</button>
            <button onClick={() => {
              setConfirmDelete(false)
            }}>NO</button>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Scard;
