import React from 'react';
import Lab1  from "./Lab1";
import { Route, Routes, Navigate } from "react-router"; 
import TOC from "./TOC"; 
import Lab2 from "./Lab2"; 
import Lab3 from "./Lab3"; 
import Lab4 from './Lab4';
import Lab5 from './Lab5';
import { Provider } from 'react-redux';
import store from './store';

export default function Labs() { 
    return ( 
      <Provider store={store}>
        <div> 
          <h1>Web Dev - Juan Diego Dumez Garcia</h1> 
          <TOC /> 
          <Routes> 
            <Route path="Lab1" element={<Lab1 />} /> 
            <Route path="Lab2" element={<Lab2 />} /> 
            <Route path="Lab3/*" element={<Lab3 />} />
            <Route path="Lab4" element={<Lab4 />} />
            <Route path="Lab5" element={<Lab5 />} />
          </Routes> 
        </div> 
      </Provider>
    );
}