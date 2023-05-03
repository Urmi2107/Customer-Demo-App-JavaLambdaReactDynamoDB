import './App.css';
import { useContext } from 'react';
import { CustomerContext } from './CustomerProvider';
import ShowCustomers from './custom-components/ShowCustomers';
import AddCustomerForm from './custom-components/AddCustomerForm';
import UpdateCustomerForm from './custom-components/UpdateCustomerForm';
import {
  HeroLayout2,HeroLayout3,NavBar 
 } from './ui-components';
  
function App() {
  const {addCustomerHandler,showAddCustomerForm,showcustomers,getCustomers,showCustomerUpdateForm}=useContext(CustomerContext);
  return (
    
    <div className="App">
      <NavBar
        overrides={{
          Dashboard:{
            style: {
              cursor:"pointer",
            },
            onClick:()=>{addCustomerHandler()}
          
          },
          Jobs:{
            style: {
              cursor:"pointer",
            },
            onClick:()=>{getCustomers()}
          }
        }
      }
      />
      <HeroLayout2
      overrides={{
        HeroLayout3:{
          height:"50px",
          backgroundColor: "rgba(0, 0, 0, 1)"
        },
        HeroLayout2:{
          height:"330px"
        }
      }
    }
      />
      {
        showcustomers && (<ShowCustomers/>)
      }
      {
        showAddCustomerForm && (<AddCustomerForm/>)
      }
      {
        showCustomerUpdateForm && (<UpdateCustomerForm/>)
      }
    </div>
  );
}

export default App;
