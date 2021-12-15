import React from 'react'
import styled from 'styled-components/native'

export type HeadingProps = {
  // onPress: () => void
  // title: string
  // color?: string
  // textColor?: string
  // size?: string
  size?: 'huge' | 'large' | 'medium' | 'small' | 'tiny'
  children?: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  fontWeight?: 'normal' | 'bold'
  fontFamily?: string
  color?: string
  underline?: boolean
  italic?: boolean
  fontSize?: number
}

export const Heading = ({
  size = 'medium',
  variant = 'h1',
  fontWeight = 'normal',
  fontFamily = 'sans-serif',
  color,
  underline = false,
  italic = false,
  fontSize,
  children
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
  return <Container>{children}</Container>
}
