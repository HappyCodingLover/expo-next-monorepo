import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading } from 'app/design-system/Typography/Heading/heading'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Heading',
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Heading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>Flexasus Heading. Have a good day. </Heading>
)

export const DefaultHeading = Template.bind({});

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  title: 'Heading',
  fontWeight: 'bold'
}
