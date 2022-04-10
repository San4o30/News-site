import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNews} from './store/reducers/news.reducer';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import NewsList from './containers/NewsList/NewsList';
import Contacts from './containers/Contacts/Contacts';
import AddNews from './components/AddNews/AddNews';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<NewsList/>}/>
        <Route path='/news/:id' element={<NewsList/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/news-form' element={<AddNews/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
