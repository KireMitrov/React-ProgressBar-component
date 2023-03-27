import './App.css';
import ProgressBar from './ProgressBar/ProgressBar';
import { Routes, Route } from "react-router-dom"
import Billing from './Pages/Billing/Billing';
import Payment from './Pages/Payment/Payment';
import CompleteOrder from './Pages/CompleteOrder/CompleteOrder';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path=""  element={<Main></Main>}></Route>
        <Route path="shipping"  element={<Billing></Billing>}></Route>
        <Route path="review & payment"  element={<Payment></Payment>}></Route>
        <Route path="complete"  element={<CompleteOrder></CompleteOrder>}></Route>
      </Routes>
    </div>
  );
}

export default App;
