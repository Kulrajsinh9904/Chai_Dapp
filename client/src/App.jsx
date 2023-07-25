import { useState,useEffect } from 'react'
import abi from "./contactjson/chai.json"
import {ethers} from "ethers"
import chai from "./chai.png";
import Memos from './components/Memos'
import Buy from './components/Buy'
import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('Not connected');
  useEffect(()=>{
    const template=async()=>{
      const contractAddres="0xdA6F3F6DDe3e3CBE0a3148c162F1dAF4b2f171Ee";
      const contractABI=abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
     
    
        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })

        //Autocratically Connect Account (Reload option)
        window.ethereum.on("accountsChanged",()=>{
          window.location.reload()
        })

        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer =  provider.getSigner(); //write the blockchain
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        console.log(contract)
      setState({provider,signer,contract});
      
        
    }
    template();
  },[])

  return (

  

    <div className="App">
    connected account : {account}
     <Buy state={state}></Buy>
     {/*<Memos state={state}></Memos>*/}   
    </div>
  )
}

export default App

