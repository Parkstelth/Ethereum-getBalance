import Accountbalance from "./Accountbalance"


function Accountinfo( {account,value} ) {

  if (!account.address) {
   
    return <div className="merge-col">목록이 없습니다</div>
  }

  
    let address = account.address;
    return <Accountbalance address={address} value={value} />
   
  
}

export default Accountinfo