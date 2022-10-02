import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Results from './Results';

const Routing = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/">
          {/* <Redirect to="/search" /> */}
        </Route>
        <Route exact path="/search" element={<Results />} />
        <Route exact path="/images" element={<Results />} />
        <Route exact path="/news" element={<Results />} />
        <Route exact path="/videos" element={<Results />} />
      </Routes>
    </div>
  )
}

export default Routing