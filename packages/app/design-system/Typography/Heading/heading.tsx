import React from 'react'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

export type HeadingProps = {
  // onPress: () => void
  // title: string
  // color?: string
  // textColor?: string
  // size?: string
  size?: string
  children?: any
  variant?: any
  fontWeight?: string
  fontFamily?: string
  color?: string
  underline?: any
  italic?: boolean
  fontSize?: any
}

export const Heading = ({
  size,
  children,
  variant,
  fontWeight,
  fontFamily,
  color,
  underline,
  italic,
  fontSize,
  ...props
}: HeadingProps) => {
  const Container: any = styled.View`
    font-weight: ${fontWeight};
    font-family: ${fontFamily};
    color: ${color};
    font-size: ${fontSize};
  `

  // let headingClass: any = cx(
  //   `leading-header_${size}`,
  //   ` text-mobile_header_${size} sm:text-header_${size} `,
  //   headingStyleClass,
  //   {
  //     underline: underline
  //   },
  //   {
  //     italic: italic
  //   }
  // )
  return <Container {...props}>{children}</Container>
}

Heading.propTypes = {
  size: PropTypes.oneOf(['huge', 'large', 'medium', 'small', 'tiny']),
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  underline: PropTypes.bool,
  italic: PropTypes.bool,
  fontSize: PropTypes.string
}

Heading.defaultProps = {
  variant: 'h1',
  fontWeight: 'normal',
  size: 'normal',
  fontFamily: 'sans-serif',
  underline: false,
  italic: false,
}
