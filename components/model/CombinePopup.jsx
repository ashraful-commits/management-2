"use client";
import React, { useState, useEffect } from "react";
import WelcomePopup from "./WelcomePopup";
import ProfileModel from "./ProfileModel";
import { useSession } from "next-auth/react";
const CombinePopup = () => {
  const { data: session } = useSession();
  const [show, setShow] = useState(false);
  const [popup, setPopup] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!session) {
        setShow(true);
      } else {
        setShow(false);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [session]);

  return (
    <div>
      {show && (
        <div>
          {popup === 1 && (
            <WelcomePopup setShow={setShow} setPopup={setPopup} />
          )}
          {popup === 2 && (
            <ProfileModel setShow={setShow} setPopup={setPopup} />
          )}
        </div>
      )}
    </div>
  );
};

export default CombinePopup;
