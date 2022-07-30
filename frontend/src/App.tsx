import React from 'react';
import SenderDashboardPage from './Pages/SenderDashboardPage';
import CourierDashboardPage from './Pages/CourierDashboardPage';
import DeliveryDetailsPage from './Pages/DeliveryDetailsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParcelDetailsPage from './Pages/ParcelDetailsPage';
import HomePage from './Pages/HomePage';
import RouteDetailsPage from './Pages/RouteDetailsPage';
import CreateParcelPage from './Pages/CreateParcelPage'
import SignUpPage from './Pages/SignUpPage';
import UpdateUserProfilePage from './Pages/UpdateUserProfilePage';
import CreateRoutePage from './Pages/CreateRoutePage';
import UpdateRouteInfoPage from './Pages/UpdateRouteInfoPage';
import { StateProvider } from './state/index'
import UpdateParcelInfoPage from './Pages/UpdateParcelInfoPage';
import { AuthProvider } from "../src/auth/AuthProvider";
import InitialState from './state/InitialState';
import reducer from './state/reducer';
//TODO FINE TUNE THE FLAG DISPLAY STYLING
//TODO STYLE THE ROUTE INFO CARD TO COMPLETION



function App() {


  return (
    <StateProvider initialState={InitialState} reducer={reducer}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard/sender/:user_id" element={<SenderDashboardPage />} />
            <Route path="/dashboard/courier/:user_id" element={<CourierDashboardPage />} />
            <Route path="/deliveries/:delivery_id" element={<DeliveryDetailsPage />} />
            <Route path="/parcels/:parcel_id" element={<ParcelDetailsPage />} />
            <Route path="/parcels/:parcel_id/update" element={<UpdateParcelInfoPage />} />
            <Route path="/parcels/new" element={<CreateParcelPage />} />
            <Route path="/users/register" element={<SignUpPage />} />
            <Route path="/users/:user_id/update" element={<UpdateUserProfilePage />} />
            <Route path="/routes/new" element={<CreateRoutePage />} />
            <Route path="/routes/:route_id" element={<RouteDetailsPage />} />
            <Route path="/routes/:route_id/update" element={<UpdateRouteInfoPage />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </StateProvider>
  );
}

export default App;
