import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })

  useEffect(()=>{
    const template=async()=>{
      const contractAddres="";
      const contractABI="";
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain

      const {ethereum}=window;

      const account = await ethereum.request({
        method:"eth_requestAccounts"
      })

        
    }
    template();
  },[])

  return (
    <div className="App">
        
    </div>
  )
}

export default App

