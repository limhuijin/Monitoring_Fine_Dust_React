import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from './_template/template';
import Main from './page/main';

// Template Component import
import TemplateList from './page/template/list';
import TemplateDetail from './page/template/detail';
import TemplateInsert from './page/template/insert';
import TemplateUpdate from './page/template/update';
import TemplateDelete from './page/template/delete';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Main />} />
            <Route path="/template/list" element={<TemplateList />} />
            <Route path="/template/detail/:num" element={<TemplateDetail />} />
            <Route path="/template/insert" element={<TemplateInsert />} />
            <Route path="/template/update" element={<TemplateUpdate />} />
            <Route path="/template/delete" element={<TemplateDelete />} />
            {/*<Route path="contact" element={<Contact />} />*/}
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
