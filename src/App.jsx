import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getNews} from './store/reducers/news.reducer';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import NewsList from './containers/NewsList/NewsList';
import Contacts from './containers/Contacts/Contacts';
import AddNews from './components/AddNews/AddNews';
import NewsItem from './components/NewsItem/NewsItem';
import ChangeNews from './components/ChangeNews/ChangeNews';

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
        <Route path='/news/news-item' element={<NewsItem/>}/>
        <Route path='/news/change-news' element={<ChangeNews/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/news-form' element={<AddNews/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
