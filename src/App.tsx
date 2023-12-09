import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import { EmployeeListPage, HomePage, LoginScreen } from './pages';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/employees" element={<EmployeeListPage />} />
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
