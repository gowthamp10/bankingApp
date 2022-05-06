import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function BankReport(){
    const [trans,setTrans]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8090/api/accounts/all")
        .then(resp=>{
            console.log(resp.data)    
            setTrans(resp.data.data)        
        })
        .catch(err=>{
            console.log(err)
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
                    <br/>
                    <table class="table ">
						<thead class="thead-light">
							<tr>
								<th>Id</th>
								<th>Transaction Date</th>
                                <th>Account No</th>
								<th>Particulars</th>
								<th>Debit Amount</th>
								<th>Credit Amount</th>
							</tr>
						</thead>
						<tbody>
                            {trans.map(tran=>(
							<tr>
								<td>{tran.id }</td>
								<td>{tran.tdate }</td>
                                <td>{tran.account.accno}</td>
								<td>{tran.ttype }</td>
								<td>{tran.dramount==0 ? "" : tran.dramount}</td>
								<td>{tran.cramount==0 ? "":tran.cramount }</td>
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

export default BankReport;