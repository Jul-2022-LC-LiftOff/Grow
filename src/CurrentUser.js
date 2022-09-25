import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase-config";
import { query, collection, getDocs, where } from "firebase/firestore";
function CurrentUser() {
  const user = auth.currentUser;
  const userId = user.uid;
  const userEmail = user.email;

  return (
    <div>
      <div>
        Logged in as
        {/* <div>{user?.uid}</div> */}
        {/* <div>{user?.email}</div> */}
        <div>{userId}</div>
        <div>{userEmail}</div>
      </div>
    </div>
  );
}
export default CurrentUser;
