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
      Logged in as
      <div>Email: {userEmail}</div>
      <div>ID: {userId}</div>
    </div>
  );
}
export default CurrentUser;
