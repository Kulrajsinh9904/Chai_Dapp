import { useState,useEffect } from 'react'
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
      const contractAddres="";
      const contractABI="";
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain

      try{
      const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })

        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer =  provider.getSigner(); //write the blockchain
        
        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        )
        setState({provider,signer,contract});
      }catch(error){
        console.log(error)
      }

    }
     template();
  },[])

  return (
    <div className="App">
        
    </div>
  )
}

export default App

