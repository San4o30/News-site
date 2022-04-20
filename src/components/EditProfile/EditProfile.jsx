import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editProfile } from '../../store/reducers/auth.reducer';

function EditProfile() {
  const profile = useSelector(store => store.auth.profile);
  const [userInfo, setUserInfo] = useState(profile || {
    username : '',
    birthday: ''
  })
  const changeHandler = e => {
    let value = e.target.value;
    setUserInfo(user => {
      return {
        ...user,
        [e.target.name]: value,
      };
    });
  }
  const dispatch = useDispatch()
  const nav = useNavigate()
  const submitHandler = e => {
    e.preventDefault();
      dispatch(editProfile(userInfo)).then(() => nav('/profile'));
  }
  return (
    <div className="">
      <h3>Редактирование профиля</h3>
      <form onSubmit={submitHandler}>
        <div className="input__group">
          <input onChange={changeHandler} type="text" name='username' value={userInfo.username} />
        </div>
        <div className="input__group">
          <input onChange={changeHandler} type="date" name='birthday' value={userInfo.birthday} />
        </div>
        <button>Редактировать</button>
      </form>
    </div>
  )
}

export default EditProfile