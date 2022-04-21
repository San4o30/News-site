import { Route, Routes } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux'
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import NewsList from './containers/NewsList/NewsList';
import Contacts from './containers/Contacts/Contacts';
import AddNews from './components/AddNews/AddNews';
import NewsItem from './components/NewsItem/NewsItem';
import Login from './containers/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AboutUs from './containers/AboutUs/AboutUs';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import EditNews from './components/EditNews/EditNews';

function App() {


  const user = useSelector(store => store.auth.user);

  return (
    <Layout>
      <Routes>
        <Route
          path="/news-form"
          element={
            <ProtectedRoute user={user}>
              <AddNews />
            </ProtectedRoute>
          }
        />
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<NewsList/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile/profile-edit' element={<EditProfile/>} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/news-form' element={<AddNews />} />
        <Route path='/news/news-item/:id' element={<NewsItem />} />
        <Route path='/news/change-news/:id' element={<EditNews/>} />
      </Routes>
    </Layout>
  );
}

export default App;
