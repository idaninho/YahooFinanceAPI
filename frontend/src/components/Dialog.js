import React from 'react'
import { Card } from 'react-bootstrap'
import {
  PopupContainer,
  BoxContainer,
  CloseIconContainer,
} from './styles/Dialog-styles'

const Dialog = (props) => {
  const { financeData, handleClose } = props
  const {
    exchange,
    exchangeTimezoneName,
    exchangeTimezoneShortName,
    fullExchangeName,
    market,
    quoteSourceName,
    shortName,
    symbol,
    region,
    quoteType,
    regularMarketChange,
    regularMarketChangePercent,
    regularMarketPrice,
    regularMarketTime,
  } = financeData

  return (
    <PopupContainer>
      <BoxContainer>
        <CloseIconContainer onClick={handleClose}>x</CloseIconContainer>

        <Card.Body>
          <Card.Title as="div">
            <strong>{shortName ? shortName : symbol}</strong>
          </Card.Title>
          <Card.Text as="div">Region: {region}</Card.Text>
          <Card.Text as="div">Market Time: {regularMarketTime.fmt}</Card.Text>
          <Card.Text as="div">Quote: {quoteType}</Card.Text>
          <Card.Text as="div">Quote Source: {quoteSourceName}</Card.Text>
          <Card.Text as="div">Market: {market}</Card.Text>
          <Card.Text as="div">Exchange Name: {fullExchangeName}</Card.Text>
          <Card.Text as="div">Time Zone: {exchangeTimezoneShortName}</Card.Text>
          <Card.Text as="div">Time Zone Of: {exchangeTimezoneName}</Card.Text>
          <Card.Text as="div">Exchange: {exchange}</Card.Text>
          <Card.Text as="div">
            Market Change: {regularMarketChange.fmt}
          </Card.Text>
          <Card.Text as="div">
            Percent Change: {regularMarketChangePercent.fmt}
          </Card.Text>
          <Card.Text as="h3">${regularMarketPrice.fmt}</Card.Text>
        </Card.Body>
      </BoxContainer>
    </PopupContainer>
  )
}

export default Dialog
