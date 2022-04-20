import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getProfile } from '../../store/reducers/auth.reducer';
import './Profile.css'
function Profile() {
  const user = useSelector(store => store.auth.user);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile())
  }, [])
  const profile = useSelector(store => store.auth.profile);

  return (
    <div className='profile'>
      {profile &&
        <>
          <img width='100' className='profile-avatar' src={`http://localhost:1337${profile.image.url}`} alt="" />
          <h4>{profile.username}</h4>
          <h6>Дата рождения: {profile.birthday}</h6>
          <h6>{user.email}</h6>
          <NavLink to='/profile/profile-edit'>Редактировать профиль</NavLink>
        </>
      }
    </div>
  )
}

export default Profile