import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/LoginPage/Login';
import { useState } from 'react';
import Wrapper from './Components/Wrapper';
import SalaryTypeSetup from './Components/Payroll/SalaryTypeSetup';
import SalaryGenrate from './Components/Payroll/SalaryGenrate';
import SalarySetup from './Components/Payroll/SalarySetup';
import GrantLoan from './Components/Loan/GrantLoan';
import LoanInstallment from './Components/Loan/LoanInstallment';
import LoanReport from './Components/Loan/LoanReport';
import Holiday from './Components/Leave/Holiday';
import AddLeaveType from './Components/Leave/AddLeaveType';
import WeeklyHolidy from './Components/Leave/WeeklyHolidy';
import LeaveApplication from './Components/Leave/LeaveApplication';
import Department from './Components/Department/Department';
import AddDivision from './Components/Department/AddDivision';
import ManageDivision from './Components/Department/ManageDivision';
import Dashboard from './Pages/Dashboard/Dashboard';
import POSInvoice from './Pages/ManageOrder/POSInvoice';
import OrderList from './Pages/ManageOrder/OrderList';
import PendingOrder from './Pages/ManageOrder/PendingOrder';
import CompleteOrder from './Pages/ManageOrder/CompleteOrder';
import CancelOrder from './Pages/ManageOrder/CancelOrder';
import POSSetting from './Pages/ManageOrder/POSSetting';
import Reservation from './Pages/Reservation/Reservation';
import AddBooking from './Pages/Reservation/AddBooking';
import UnAvailableDay from './Pages/Reservation/UnAvailableDay';
import ReservationSetting from './Pages/Reservation/ReservationSetting';
import PurchaseItem from './Pages/PurchaseManage/PurchaseItem';
import PurchaseReturn from './Pages/PurchaseManage/PurchaseReturn';
import ReturnInvoice from './Pages/PurchaseManage/ReturnInvoice';
import SupplierManage from './Pages/PurchaseManage/SupplierManage';
import StockOutIngrdients from './Pages/PurchaseManage/StockOutIngrdients';
import AddCategory from './Pages/FoodManagement/ManageCategory/AddCategory';
import CategoryList from './Pages/FoodManagement/ManageCategory/CategoryList';
import AddFood from './Pages/FoodManagement/ManageFood/AddFood';
import AddAddons from './Pages/FoodManagement/ManageAddOnes/AddAddons';
import AddOnsList from './Pages/FoodManagement/ManageAddOnes/AddOnsList';
import AddOnsAsginList from './Pages/FoodManagement/ManageAddOnes/AddOnsAsginList';
import ProductionList from './Pages/Production/ProductionList';
import AddProduction from './Pages/Production/AddProduction';
import BankList from './Pages/Setting/Bank/BankList';
import BankTransaction from './Pages/Setting/Bank/BankTransaction';
import CardTerminalList from './Pages/Setting/CustomerType/CardTerminalList';
import CustomerTypeList from './Pages/Setting/CustomerType/CustomerTypeList';
import CustomerList from './Pages/Setting/CustomerType/CustomerList';
import ThirdPartyCustomer from './Pages/Setting/CustomerType/ThirdPartyCustomer';
import KitchenDashboard from './Pages/Setting/KitchenSetting/KitchenDashboard';
import KitchList from './Pages/Setting/KitchenSetting/KitchList';
import KitchnAssign from './Pages/Setting/KitchenSetting/KitchnAssign';
import TableSettings from './Pages/Setting/ManagetTable/TableSettings';
import TableList from './Pages/Setting/ManagetTable/TableList';
import PaymentMethodList from './Pages/Setting/PaymentSatting/PaymentMethodList';
import PaymentSetup from './Pages/Setting/PaymentSatting/PaymentSetup';
import ShippingMethod from './Pages/Setting/PaymentSatting/ShippingMethod';
import SmsConfigratin from './Pages/Setting/SMS/SmsConfigratin';
import SmsTemplate from './Pages/Setting/SMS/SmsTemplate';
import IngredentList from './Pages/Setting/UnitMearment/IngredentList';
import UnitMeasurementList from './Pages/Setting/UnitMearment/UnitMeasurementList';
import AddRole from './Pages/RolePermission/AddRole';
import PurchaseReport from './Pages/Report/PurchaseReport';
import StockReportFood from './Pages/Report/StockReportFood';
import StockReportKitchen from './Pages/Report/StockReportKitchen';
import AllVarient from './Pages/FoodManagement/ManageVariant/AllVarient';
import FoodList from './Pages/FoodManagement/ManageFood/FoodList';
import AddIngradient from './Pages/FoodManagement/ManageIngredient/AddIngradient';
import AddPurchase from './Pages/PurchaseManage/AddPurchase';
import CheckIn from './Pages/CheckIn';
import SaleByDay from './Pages/Report/SaleByDay';
import Currency from './Pages/Setting/Currency/Currency';
import AddUser from './Pages/User/AddUser';
import UserAccessRole from './Pages/RolePermission/UserAccessRole';
import AssignRole from './Pages/RolePermission/AssignRole';

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<Wrapper setToggle={setToggle} toggle={toggle} />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/manageday' element={<CheckIn />} />
          {/* Manage Order */}
          <Route path='/pos_invoice' element={<POSInvoice />} />
          <Route path='/order_list' element={<OrderList />} />
          <Route path='/pending_order' element={<PendingOrder />} />
          <Route path='/complete_order' element={<CompleteOrder />} />
          <Route path='/cancel_order' element={<CancelOrder />} />
          <Route path='/pos_setting' element={<POSSetting />} />
          {/* Reservation */}
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/add_booking' element={<AddBooking />} />
          <Route path='/unavailable_day' element={<UnAvailableDay />} />
          <Route path='/reservation_setting' element={<ReservationSetting />} />
          {/* Purchase Manage */}
          <Route path='/purchase_item' element={<PurchaseItem />} />
          <Route path='/addpurchase' element={<AddPurchase />} />
          <Route path='/purchase_return' element={<PurchaseReturn />} />
          <Route path='/return_invoice' element={<ReturnInvoice />} />
          <Route path='/supplier_manage' element={<SupplierManage />} />
          {/* ------------------Supplier Ledgar--------------------- */}
          <Route path='/stockout_ingredients' element={<StockOutIngrdients />} />
          {/* Reports */}
          <Route path='/purchasereport' element={<PurchaseReport />} />
          <Route path='/salereport' element={<StockReportFood />} />
          <Route path='/salebyday' element={<SaleByDay />} />
          {/* Food Management */}
          <Route path='/addcategory' element={<AddCategory />} />
          <Route path='/categorylist' element={<CategoryList />} />
          <Route path='/addfood' element={<AddFood />} />
          <Route path='/foodlist' element={<FoodList />} />
          <Route path='/allvarient' element={<AllVarient />} />
          <Route path='/addingredient' element={<AddIngradient />} />
          {/* Settings */}
          <Route path='/setting/currency' element={<Currency />} />

          {/* Users */}
          <Route path='/adduser' element={<AddUser />} />

          {/* Role Permission */}
          <Route path='/addrole' element={<AddRole />} />
          <Route path='/useraccessrole' element={<UserAccessRole />} />
          <Route path='/assignrole' element={<AssignRole />} />

          <Route path='/salary_type_setup' element={<SalaryTypeSetup />} />
          <Route path='/salary_setup' element={<SalarySetup />} />
          <Route path='/salary_genrate' element={<SalaryGenrate />} />
          <Route path='/grant_loan' element={<GrantLoan />} />
          <Route path='/loan_installment' element={<LoanInstallment />} />
          <Route path='/loan_report' element={<LoanReport />} />
          <Route path='/holiday' element={<Holiday />} />
          <Route path='/add_leave_type' element={<AddLeaveType />} />
          <Route path='/weekly_holiday' element={<WeeklyHolidy />} />
          <Route path='/leave_application' element={<LeaveApplication />} />
          <Route path='/department' element={<Department />} />
          <Route path='/add_leave_type' element={<AddLeaveType />} />
          <Route path='/add_division' element={<AddDivision />} />
          <Route path='/manage_division' element={<ManageDivision />} />
          <Route path='/addaddons' element={<AddAddons />} />
          <Route path='/addonslist' element={<AddOnsList />} />
          <Route path='/assignlist' element={<AddOnsAsginList />} />
          <Route path='/productionlist' element={<ProductionList />} />
          <Route path='/addproduction' element={<AddProduction />} />
          <Route path='/banklist' element={<BankList />} />
          <Route path='/banktransaction' element={<BankTransaction />} />
          <Route path='/cardterminal' element={<CardTerminalList />} />
          <Route path='/customertypelist' element={<CustomerTypeList />} />
          <Route path='/customerlist' element={<CustomerList />} />
          <Route path='/thirdpartycustopmer' element={<ThirdPartyCustomer />} />
          <Route path='/kitchendashboard' element={<KitchenDashboard />} />
          <Route path='/kitchentlist' element={<KitchList />} />
          <Route path='/kitchenassign' element={<KitchnAssign />} />

          <Route path='/tablesettings' element={<TableSettings />} />
          <Route path='/tablelist' element={<TableList />} />

          <Route path='/paymentmethodlist' element={<PaymentMethodList />} />
          <Route path='/paymentsetup' element={<PaymentSetup />} />
          <Route path='/shippingmethod' element={<ShippingMethod />} />

          <Route path='/smsconfigration' element={<SmsConfigratin />} />
          <Route path='/smstemplate' element={<SmsTemplate />} />

          <Route path='/ingradientlist' element={<IngredentList />} />
          <Route path='/unitMeasurement' element={<UnitMeasurementList />} />

          <Route path='/addrole' element={<AddRole />} />
          <Route path='/addproduction' element={<AddProduction />} />
          <Route path='/addproduction' element={<AddProduction />} />
          <Route path='/addproduction' element={<AddProduction />} />
          <Route path='/addproduction' element={<AddProduction />} />
          <Route path='/addproduction' element={<AddProduction />} />
          <Route path='/addproduction' element={<AddProduction />} />
          <Route path='/addproduction' element={<AddProduction />} />
          <Route path='/addproduction' element={<AddProduction />} />

          <Route path='/kitchenreport' element={<StockReportKitchen />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
