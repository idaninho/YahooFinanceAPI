import React from 'react'

import { CustomButtonContainer } from './styles/custom-button-styles'


function CustomButton({ children, ...otherProps }) {
  return (
    <CustomButtonContainer color={'white'} {...otherProps}>
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton