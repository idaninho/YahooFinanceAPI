import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MarketData from './MarketData'
import SearchBox from '../components/SearchBox'

const MarketList = () => {
  const [financeList, setFinanceList] = useState([])
  const [filteredFinanceList, setFilteredFinanceList] = useState([])

  let data
  let options = {
    method: 'GET',
    url: 'https://yfapi.net/v6/finance/quote/marketSummary',
    params: { modules: 'defaultKeyStatistics,assetProfile' },
    headers: {
      'x-api-key': 'bKk4VGlDsZ9AGKkBFmvp62weD82Tximf1547vpjq',
    },
  }
  useEffect(() => {
    const fetchFinanceList = async () => {
      const response = await axios.request(options)
      setFinanceList(response.data.marketSummaryResponse.result)
      setFilteredFinanceList(response.data.marketSummaryResponse.result)
      data = response
      if (!data) {
        console.log('something went wrong with fetching the data')
      }
    }

    fetchFinanceList()
  }, [])
  
    
  const handleChange = (input) => {
    console.log(input)
    if (input === '') {
      setFilteredFinanceList(financeList)
    } else {
      const filtered = financeList.filter((data) => {
        if (data.shortName) {
          return data.shortName.toLowerCase().includes(input.toLowerCase())
        } else {
          return data.symbol.toLowerCase().includes(input.toLowerCase())
        }
      })
      console.log(filtered)
      setFilteredFinanceList(filtered)
    }
  }

  const handlePriceChange = (input, keyword) => {
    console.log(input)
    if (input === '') {
      handleChange(keyword)
    }
    if (input === 'low') {
      setFilteredFinanceList(
        [...filteredFinanceList].sort(
          (a, b) => a.regularMarketPrice.raw - b.regularMarketPrice.raw
        )
      )
    }
    if (input === 'high') {
      setFilteredFinanceList(
        [...filteredFinanceList].sort(
          (a, b) => b.regularMarketPrice.raw - a.regularMarketPrice.raw
        )
      )
    }
  }

  return (
    <div>
      <h1>Market List</h1>
      <SearchBox
        handleChange={handleChange}
        handlePriceChange={handlePriceChange}
      />
      <div className="grid-container">
        {filteredFinanceList.map((financeData, idx) => (
          <MarketData key={idx} financeData={financeData} />
        ))}
      </div>
    </div>
  )
}

export default MarketList
