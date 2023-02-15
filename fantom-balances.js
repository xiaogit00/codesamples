import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const apiKey = process.env.REACT_APP_COVALENT_API_KEY
const chainName = 'fantom-mainnet'
const walletAddress = '0x0cf461c4999fb1db85bbe61bec6eef10d0a7ad15'
const balancesEndpoint = `https://api.covalenthq.com/v1/${chainName}/address/${walletAddress}/balances_v2/`


function App() {

  useEffect(() => {
    axios.get(balancesEndpoint, {
      auth: {
        username: apiKey
      }
    })
      .then(res => console.log(res))
  })

  return (
    "hi"
  );
}

export default App;
