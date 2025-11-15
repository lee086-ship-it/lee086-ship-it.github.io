import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import data from './data.jsx';
import Detail from './routes/Detail';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/" class="nav-link active" aria-current="page">
                Home
              </Link>
              <Link to="/detail" class="nav-link active" aria-current="page">
                Detail
              </Link>
              <Link to="/company" class="nav-link active" aria-current="page">
                Company
              </Link>
              <Link
                to="/company/manpower"
                class="nav-link active"
                aria-current="page"
              >
                Manpower
              </Link>
              <Link
                to="/company/map"
                class="nav-link active"
                aria-current="page"
              >
                Map
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>

              <h1 className="my-5">E-commerce project</h1>

              <div class="d-flex flex-row mb-3">
                {shoes.map((a, i) => {
                  return <Goods shoes={a} i={i} />;
                })}
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/company" element={<Company />}>
          <Route path="manpower" element={<Manpower />} />
          <Route path="map" element={<Map />} />
        </Route>
      </Routes>
      {/* <>
        <div className="main-bg"></div>

        <h1 className="my-5">Nike shop</h1>

        <div class="d-flex flex-row mb-3">
          {shoes.map((a, i) => {
            return <Goods shoes={a} i={i} />;
          })}
        </div>
      </> */}
      <div class="card m-5">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

function Goods(props) {
  return (
    <div className="p-2">
      <img
        src={
          'https://github.com/lee086-ship-it/react_workspace/blob/main/s' +
          (props.i + 1) +
          '.PNG?raw=true'
        }
        width="50%"
      />
      <h5 className="my-3">{props.shoes.title}</h5>
      <p> {props.shoes.price}</p>
    </div>
  );
}

function Company() {
  return (
    <div>
      <h4>company</h4>
      It's a company
      <Outlet></Outlet>
    </div>
  );
}

function Manpower() {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/lee086-ship-it/react_workspace/refs/heads/main/manpower.avif"
        width="50%"
      />
    </div>
  );
}

function Map() {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/lee086-ship-it/react_workspace/refs/heads/main/map.avif"
        width="50%"
      />
    </div>
  );
}
export default App;
