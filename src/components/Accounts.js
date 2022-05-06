import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function Accounts(){
    const [accounts,setAccounts]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8090/api/accounts")
        .then(resp=>{
            setAccounts(resp.data.data)
            console.log(accounts)
        })
    },[])
    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <SideBar />
                </div>
                <div className="col-sm-10">
                    <h4 className="text-left p-2 border-bottom border-success"></h4>
                    <table className="table ">
                <thead className="thead-light">
                    <tr>
                        <th>Account No</th>
                        <th>Holder Name</th>
                        <th>Holder Address</th>
                        <th>Account Type</th>                        
                        <th>Balance</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {accounts.map(x=>(
                    <tr key={x.accno}>
                        <td>{x.accno}</td>
                        <td>{x.customer.cname}</td>
                        <td>{x.customer.address}</td>
                        <td>{x.actype}</td>
                        <td>&#8377; {x.balance}</td>
                        <td>{x.active ? "Yes":"No"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default Accounts;