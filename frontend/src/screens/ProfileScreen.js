import React from 'react';
import { logout } from '../actions/userAction';
import { useDispatch} from 'react-redux';

function ProfileScreen(props) {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
    alert("thnks for shopping")
  }


  return <div className="profile">
         <button type="button" onClick={handleLogout} className="zu">Logout</button>
  </div>
}

export default ProfileScreen;