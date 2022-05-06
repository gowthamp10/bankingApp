import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import '../App.css'
function Dashboard(){
    const [data,setData]=useState({})
    useEffect(()=>{
        axios.get("http://localhost:8090/api/admin/dashboard")
        .then(resp=>{
            setData(resp.data.data)
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
                <div className="col-sm-10" style={{paddingLeft:"300px"}}><br/><br/>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card shadow bg-primary text-white text-right">
                                <div className="card-body">
                                    <h4>Customers having accounts</h4>
                                    <h5>{data.customers}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="card shadow bg-primary text-white text-right">
                                <div className="card-body">
                                    <h4>Online Banking Users</h4>
                                    <h5>{data.users}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;