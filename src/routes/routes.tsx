// src/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CategoryPage from '../pages/Category/CategoryPage';
import WebsiteDetailPage from '../pages/WebsiteDetail/WebsiteDetailPage';
import AboutPage from '../pages/About/AboutPage';
import { AppRoute } from './constants';
import WebsiteList from '../components/WebsiteList/WebsiteList';
import CategoriesSites from '../components/CategorySites/CategorySites';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<Home />} />
      <Route path={AppRoute.CATEGORY} element={<CategoryPage />} />
      <Route path={AppRoute.EXPLORE_CATEGORY+'/:id'} element={<CategoriesSites />} />
      <Route path={AppRoute.WEBSITES} element={<WebsiteList />} />
      <Route path={AppRoute.POPULAR_WEBSITES} element={<WebsiteList />} />
      <Route path={AppRoute.WEBSITE_DETAIL + '/:id'} element={<WebsiteDetailPage />} />
      <Route path={AppRoute.ABOUT} element={<AboutPage />} />
    </Routes>
  );
};

export default AppRoutes;
