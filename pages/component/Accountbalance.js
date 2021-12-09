function Accountbalance({ address,value }) {
  return (
  <div className="row">
    <div className="col">
      🔒 {address}
      
    </div>
    <div className="col">
      💰 {value}
    </div>
  </div>
  )
}

export default Accountbalance