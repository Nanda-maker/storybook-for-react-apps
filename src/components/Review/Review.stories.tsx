import { Meta, StoryObj } from '@storybook/react'

import { Review } from './Review'

const meta: Meta<typeof Review> = {
  title: 'Components/Review',
  component: Review,
  argTypes: {
    rating: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Review>

export const ReviewStory: Story = {}
export const Excellence: Story = {
  args: {
    rating: 5,
  },
}
export const VeryGood: Story = {
  args: {
    rating: 4.3,
  },
}

export const Adequate: Story = {
  args: {
    rating: 2.5,
  },
}

export const VeryPoor: Story = {
  args: {
    rating: 1,
  },
}
