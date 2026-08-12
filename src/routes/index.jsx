import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Departments from '../pages/Departments';
import DepartmentDetails from '../pages/DepartmentDetails';
import Programs from '../pages/Programs';
import ProgramDetails from '../pages/ProgramDetails';
import News from '../pages/News';
import NewsDetails from '../pages/NewsDetails';
import Announcements from '../pages/Announcements';
import Faculty from '../pages/Faculty';
import FacultyDetails from '../pages/FacultyDetails';
import Services from '../pages/Services';
import Events from '../pages/Events';
import EventDetails from '../pages/EventDetails';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="departments" element={<Departments />} />
        <Route path="departments/:id" element={<DepartmentDetails />} />
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:id" element={<ProgramDetails />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetails />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="faculty" element={<Faculty />} />
        <Route path="faculty/:id" element={<FacultyDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
