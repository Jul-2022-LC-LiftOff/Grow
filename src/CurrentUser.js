import { useEffect, useState } from "react";


function CurrentUser( props ) {

  let [userEmail, setUserEmail] = useState("");
  let [userId, setUserId] = useState("");
  
  useEffect(() => {
  
    if (props.user) {
      setUserEmail(props.user.email);
      setUserId(props.user.uid);
    }
    
  }, [props.user])


  return (
    <div>
      Logged in as
      <div>Email: {userEmail}</div>
      <div>ID: {userId}</div>
    </div>
  )
}
export default CurrentUser;
