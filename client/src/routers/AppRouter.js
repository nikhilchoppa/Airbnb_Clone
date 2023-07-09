import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { VendorProposals } from "../components/vendor/VendorProposals";
import User from "../components/user/User";
import "../styles/app.css";
import "../styles/card1.css";
import "../styles/card2.css";
import "../styles/carditem.css";
import "../styles/cardList.css";
import "../styles/contacts.css";
import "../styles/eachProposal.css";
import "../styles/eventinfo.css";
import "../styles/header.css";
import "../styles/newProposal.css";
import "../styles/user.css";
import "../styles/venue.css";
import "../styles/HeaderCard.css";

import EventInfo from "../components/user/EventInfo";
import Home from "../components/LoginAndRegister/Home";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export function AppRouter() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="*" element={<h1>404 PAGE NOT FOUND!</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/vendor" element={<Header />}>
            <Route path="proposals" element={<VendorProposals />} />
          </Route>
          <Route path="/user" element={<Header />}>
            <Route path="proposals" element={<User />} />
            <Route path="proposals/:id" element={<EventInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
