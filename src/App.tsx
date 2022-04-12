import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home';
import Layout from './components/Layout';

export default function App() {
  return (
    <div>
      <h1>Basic Example com Typescript</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
