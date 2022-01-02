import React, { useState } from 'react'

const SearchBox = ({ handleChange, handlePriceChange }) => {
  const [keyword, setKeyword] = useState('')
  const onChange = (e) => {
    setKeyword(e.target.value)
    handleChange(e.target.value)
  }
  const onClear = (e) => {
    e.preventDefault()
    setKeyword('')
    handleChange(e.target.value)
  }
  const onPriceChange = (e) => {
    setKeyword(keyword)
    handlePriceChange(e.target.value, keyword)
  }
  return (
    <form className="search-box">
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search Symbol"
      ></input>
      <button type="submit" onClick={onClear}>
        Clear
      </button>
      <select name="price" id="price" onChange={onPriceChange}>
        <option value="">Sort by Price</option>
        <option value="high">Price:High To Low</option>
        <option value="low">Price: Low To High</option>
      </select>
    </form>
  )
}

export default SearchBox
