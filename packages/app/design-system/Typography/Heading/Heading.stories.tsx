import { Story, Meta } from '@storybook/react'

import { Heading } from './heading'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Heading',
  component: Heading,

  args: {
    size: 'medium',
    variant: 'h1',
    fontWeight: 'normal',
    fontFamily: 'sans-serif'
  },
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['huge', 'large', 'medium', 'small', 'tiny'],
      control: {
        type: 'select'
      }
    },
    fontWeight: {
      options: ['normal', 'bold'],
      control: {
        type: 'select'
      }
    }
  }
} as Meta<typeof Heading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<typeof Heading> = (args) => (
  <Heading {...args}>Flexasus Heading. Have a good day. </Heading>
)

export const DefaultHeading: Story<typeof Heading> = Template.bind({})

export const Primary: Story<typeof Heading> = Template.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  fontWeight: 'bold'
}
