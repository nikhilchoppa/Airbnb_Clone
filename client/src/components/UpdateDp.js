import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utills/storage-utills";
import { getCurrentUser, setCurrentUser } from "../utills/storage-utills";
import { updateUserDp } from "../utills/api-utill";
import ImagePreview from "./ImagePreview";

export default function UpdateDp({ setProfile }) {

    const navigate = useNavigate();
    useEffect(() => {
        if (!getToken()) navigate("/login");
    }, []);

    const [boo, setBoo] = useState(true);
    const [preview, setPreview] = useState("");

    function formValidation(e) {
        e.preventDefault();
        setBoo(false);
        const dp = new FormData(e.target);
        const {_id, isVendor} = getCurrentUser();
        updateUserDp(dp, _id, isVendor? "vendor" : "user")
            .then(res => {
                if (res.status === "Success") {
                    setCurrentUser(res.user);
                    setPreview("");
                    setBoo(true);
                    setProfile(false);
                } else {
                    setBoo(true)
                    alert("Failed to upload, try again...")
                }

            })
    }

    return <>
        <div className="new-dp-form">
            <button id="cancel" onClick={() => {
                setPreview("")
                setProfile(false);
            }}>X</button>
            <form onSubmit={formValidation} >
                <div className="input-field">
                    <input type={"file"} id="file" class="custom-file-input" name="profilePic" accept="image/*" required onChange={(e) => {
                        setPreview(URL.createObjectURL(e.target.files[0]));
                    }} />
                    <label htmlFor="file">Select Picture...</label>
                </div>
                <div className="preview-container">
                    {preview ? <ImagePreview preview={preview}/> : null}
                </div>
                <div className="btn-container" >
                    <button type="submit">{boo ? "change" : <span className="loader"></span>}</button>
                </div>
            </form>
        </div>
    </>
}