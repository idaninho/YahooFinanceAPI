import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Dialog from '../components/Dialog'

const MarketData = ({ financeData }) => {
  const {
    shortName,
    symbol,
    region,
    quoteType,
    regularMarketChange,
    regularMarketChangePercent,
    regularMarketPrice,
  } = financeData
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Card className="grid-item">
      <Card.Body onClick={togglePopup}>
        <Card.Title as="div">
          <strong>{shortName ? shortName : symbol}</strong>
        </Card.Title>
        <Card.Text as="div">Region: {region}</Card.Text>
        <Card.Text as="div">{quoteType}</Card.Text>
        <Card.Text as="div">Market Change: {regularMarketChange.fmt}</Card.Text>
        <Card.Text as="div">
          Percent Change: {regularMarketChangePercent.fmt}
        </Card.Text>
        <Card.Text as="div">{region}</Card.Text>
        <Card.Text as="h3">${regularMarketPrice.fmt}</Card.Text>
      </Card.Body>
      {isOpen && <Dialog financeData={financeData} handleClose={togglePopup} />}
    </Card>
  )
}
export default MarketData
