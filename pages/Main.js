import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getFlight } from '../api/FlightDataApi'
import Accountinfo from './component/Accountinfo'
import LoadingIndicator from './component/LoadingIndicator'
import Search from './component/Search'
import Debug from './component/Debug'
import axios from 'axios'
import json from '../resource/flightList'
import Accountmenu from './component/Accoutmenu'

const Web3 = require('web3')
const rpcURL = "https://ropsten.infura.io/v3/6f1d81dc47a74fb490115e38f779483f"
const web3 = new Web3(rpcURL)


export default function Main() {
  const [isLoading, setIsLoading] = useState(false)
  const [condition, setCondition] = useState({
    type: 'account'
  })
  const [accountvalue, setAccoutvalue] = useState(0)

  const search = ({ type, address }) => {

      setCondition({type:type,address:address})
    
  }


  useEffect(async()=>{
  
    if(condition.address){
      setIsLoading(true)
      
       let a = await axios.get(`https://api-ropsten.etherscan.io//api?module=account&action=balance&address=${condition.address}&tag=latest&apikey=1EMM8FN84K2627TEGBD1GJNH7G6MZTYW3Q`)

     let value = a.data.result
     let nvalue = web3.utils.fromWei(value, 'ether')
   
     setAccoutvalue(nvalue)
      setIsLoading(false)
    }
  },[condition])
  

  global.search = search // 실행에는 전혀 지장이 없지만, 테스트를 위해 필요한 코드입니다. 이 코드는 지우지 마세요!

  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          ETHEREUM ROPSTEN 계좌 조회
        </h1>
        <Search onSearch={search}/>
        <div className="table">
          <div className="row-header">
            <Accountmenu />
          </div>
         <Accountinfo account={condition} value ={accountvalue} />
        </div>

        {/* <div className="debug-area">
          <Debug condition={condition} />
        </div> */}
      </main>
    </div>
  )
}
