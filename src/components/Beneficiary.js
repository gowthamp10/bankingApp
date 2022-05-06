import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function Beneficiary(){
    const cid=sessionStorage.getItem("id")
    const [blist,setBlist]=useState([])
    const [data,setData]=useState({
        "cid":cid
    })

    const handleInput=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit =e=>{
        e.preventDefault()
        console.log(data)
        axios.post("http://localhost:8090/api/customers/beneficiary",data)
        .then(resp=>{
            console.log(resp.data)  
            loaddata()   
            setData({"cid":cid})  
            e.target.reset() 
            console.log("data",data)                               
        })
        .catch(error=>{
            console.log("Error",error);            
        }) 
    }

    const loaddata=()=>{
        axios.get("http://localhost:8090/api/customers/beneficiary/"+cid)
        .then(resp=>{
            console.log(resp.data)    
            setBlist(resp.data.data)        
        })
        .catch(err=>{
            console.log(err)
        })
        
    }

    useEffect(()=>{
        loaddata()
    },[])
    return (
<>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <SideBar />
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-8">        
                            <h4 className="text-center p-2">All Beneficiary</h4>
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Beneficiary Name</th>
                                        <th>Bank Name</th>
                                        <th>Account Number</th>
                                        <th>Max Limit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {blist.map(b=>(
                                    <tr key={b.id}>
                                        <td>{b.id }</td>
                                        <td>{b.bname }</td>
                                        <td>{b.bankname }</td>
                                        <td>{b.accno }</td>
                                        <td>&#8377; {b.maxlimit }</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-4">
                            <h4 className="text-center p-2">Add Beneficiary</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" required name="bname" value={data?.bname} onChange={handleInput} placeholder="Beneficiary Name" 
                                        className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" required name="bankname" value={data?.bankname} onChange={handleInput} placeholder="Bank Name" 
                                        className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" required name="ifsc" value={data?.ifsc} onChange={handleInput} placeholder="Bank IFSC Code" 
                                        className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" required name="accno" value={data?.accno} onChange={handleInput} placeholder="Account Number" 
                                        className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="number" required name="maxlimit" value={data?.maxlimit} onChange={handleInput} placeholder="Maximum Limit" 
                                        className="form-control"/>
                                </div>
                                <input type="submit" value="Add Beneficiary" className="btn btn-primary float-right"/>
                            </form>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        </>
    )}

export default Beneficiary;