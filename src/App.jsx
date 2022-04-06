import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getNews} from './store/reducers/news.reducer';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
