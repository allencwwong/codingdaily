import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import App from './App';
import {Day1,Day2,Day3,Day4,Day5,Day6,Day7,Day8,Day9,Record} from './pages';
import './index.css';

const DAY_NUM = 9
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App days={DAY_NUM} />}>
            <Route path="records" element={<Record />} />
            <Route path="day1" element={<Day1 />} />
            <Route path="day2" element={<Day2 />} />
            <Route path="day3" element={<Day3 />} />
            <Route path="day4" element={<Day4 />} />
            <Route path="day5" element={<Day5 />} />
            <Route path="day6" element={<Day6 />} />
            <Route path="day7" element={<Day7 />} />
            <Route path="day8" element={<Day8 />} />
            <Route path="day9" element={<Day9 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
