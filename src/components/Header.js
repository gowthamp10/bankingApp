function Header(){
    const uname=sessionStorage.getItem("uname")
    return (
<div className="jumbotron p-3 mb-0 bg-primary text-white rounded-0 ">
    <img src="https://m.media-amazon.com/images/I/71RDcpYH+PL._SY355_.jpg" 
    className="float-left"style={{height:"75px"}}></img>
    <br/>
    <h5 className="float-right m-2">Welcome {uname}</h5>
    <h2 className="text-center">Online Bank Application</h2>
</div>
    )}

export default Header;