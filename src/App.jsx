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
        <Route path='/news' element={<NewsList />} />
        <Route path='/news/news-item/:id' element={<NewsItem />} />
        <Route path='/news/change-news/:id' element={<AddNews edit />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/news-form' element={<AddNews />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
