import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

function Cheque(){
    const [trans,setTrans]=useState([])
    const [data,setData]=useState({
        "found":false,
        "accno":""
    })

    useEffect(()=>{
        console.log(data)
        axios.get("http://localhost:8090/api/accounts/passbook/"+data.accno)
        .then(resp=>{
            console.log(resp.data)    
            setTrans(resp.data.data)        
        })
        .catch(err=>{
            console.log(err)
        })
    },[data])

    return(
        <>
        <Header/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 bg-transparent p-0 border-right border-primary" style={{height:"calc(100vh - 80px)"}}>
                    <SideBar />
                </div>
                <div className="col-sm-10">
                <br/><br/>
                    <div className="card" style={{textAlign:"center"}}>
                        
                        <div className="card">
                            <div className="card-title"><hr/><h4>CHEQUE BOOK</h4><hr/><br/></div>
                            
                            <h6>Pay to the order of ___________________________________________________</h6><br/>
                           of  amount $_______________________ only <br/><br/>
                            <h6 style={{paddingRight:"900px"}}>DATE: </h6><br/>
                            <h6 style={{paddingRight:"880px"}}>Signature: </h6>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cheque;