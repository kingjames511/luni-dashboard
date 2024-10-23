import React from "react";
import  Tab  from 'react-bootstrap/Tab';
import { Tabs } from "react-bootstrap";
import AddCustomer from "../components/addCustomers";
import CustomerList from "../components/viewCustomers";


function Customers(){
    return (
        <>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Products">
      <CustomerList />
      </Tab>
      <Tab eventKey="profile" title="Add Product">
      <AddCustomer />
      </Tab>
      
    </Tabs>
        </>
    )
}

export default Customers;