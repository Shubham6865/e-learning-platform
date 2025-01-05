import React, { useState } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Sidebar from '../../component/Sidebar/Sidebar';
import HomeContent from './HomeContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FreeVideo from '../FreeVideo/FreeVideo';
import Subscription from '../Subscription/Subscription';
import Playlist from '../Playlist/Playlist';
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="w-screen h-screen flex flex-col">

        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-1">

          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 p-2  ">
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route path="/freevideo" element={<FreeVideo />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/playlist" element={<Playlist />} />
            </Routes>

          </main>
        </div>
      </div>
    </Router>
  );
};

export default Home;
