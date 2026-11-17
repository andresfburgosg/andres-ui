import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { useState, useRef } from 'react'
import { expect, fn, userEvent, spyOn } from 'storybook/test'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'md',
    density: 'default',
    fullWidth: false,
    rounded: 'default',
    elevation: 2,
    disabled: false,
    loading: false,
    icon: false,
    prevIcon: ''
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info'
      ]
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    density: {
      control: 'select',
      options: ['reduced', 'comfortable', 'default']
    },
    fullWidth: {
      control: 'boolean'
    },
    rounded: {
      control: 'select',
      options: ['zero', 'xs', 'sm', 'default', 'lg', 'xl']
    },
    elevation: {
      control: 'select',
      options: [0, 2, 3, 4, 5]
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    icon: {
      control: 'boolean'
    },
    prevIcon: {
      control: 'text'
    }
  },
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#0d1117' },
        light: { name: 'Light', value: '#ffffff' }
      }
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

/* Variants */

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="info">Info</Button>
    </div>
  )
}

/* Sizes */

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  )
}

/* Density */

export const Density: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button density="reduced">Reduced</Button>
      <Button density="comfortable">Comfortable</Button>
      <Button density="default">Default</Button>
    </div>
  )
}

/* Full width */

export const FullWidth: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button fullWidth={false}>Default</Button>
      <Button fullWidth={true}>Full Width</Button>
    </div>
  )
}

/* Rounded */

export const Rounded: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button rounded="zero">Zero Rounded</Button>
      <Button rounded="xs">Xs Rounded</Button>
      <Button rounded="sm">Small Rounded</Button>
      <Button rounded="default">Default Rounded</Button>
      <Button rounded="lg">Large Rounded</Button>
      <Button rounded="xl">Extra Large Rounded</Button>
    </div>
  )
}

/* Elevation */

export const Elevation: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button elevation={0}>Elevation (0)</Button>
      <Button elevation={2}>Elevation (2)</Button>
      <Button elevation={3}>Elevation (3)</Button>
      <Button elevation={4}>Elevation (4)</Button>
      <Button elevation={5}>Elevation (5)</Button>
    </div>
  )
}

/* Icon */

export const IconStyles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>No Icon Button</Button>
      <Button prevIcon="check">Icon Text Button</Button>
      <Button icon={true} prevIcon="check">
        Icon Button
      </Button>
      <Button loading={true} prevIcon="check">
        Icon Text Button (loading)
      </Button>
      <Button loading={true} icon={true} prevIcon="check">
        Icon Button (loading)
      </Button>
    </div>
  )
}

/* States */

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

/* Clicking */

export const WithClickEvent: Story = {
  args: {
    children: 'Click me',
    onClick: fn(() => alert('Button Clicked'))
  },
  render: (args) => <Button {...args} />,
  play: async ({ canvas, args }) => {
    spyOn(window, 'alert')
    await userEvent.click(
      canvas.getByRole('button', { name: args.children.toString() })
    )
    expect(args.onClick).toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledWith('Button Clicked')
  }
}

/* Should not click */

export const WithClickEventDisabled: Story = {
  args: {
    children: 'Cannot click me',
    disabled: true,
    onClick: fn(() => alert('Button Clicked'))
  },
  render: (args) => <Button {...args} />,
  play: async ({ canvas, args }) => {
    spyOn(window, 'alert')
    const button = canvas.getByRole('button', {
      name: args.children.toString()
    })
    await userEvent.click(button)
    expect(args.onClick).not.toHaveBeenCalled()
    expect(window.alert).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
  }
}

/* Button with loading interaction */

const ButtonWithLoading = () => {
  const [buttonLoading1, setButtonLoading1] = useState(false)
  const [buttonLoading2, setButtonLoading2] = useState(false)
  const [buttonLoading3, setButtonLoading3] = useState(false)
  const timeout1 = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timeout2 = useRef<ReturnType<typeof setTimeout> | null>(null)
  const timeout3 = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleButton1 = () => {
    setButtonLoading1(true)
    if (timeout1.current) {
      clearTimeout(timeout1.current)
    }
    timeout1.current = setTimeout(() => setButtonLoading1(false), 2000)
  }

  const handleButton2 = () => {
    setButtonLoading2(true)
    if (timeout2.current) {
      clearTimeout(timeout2.current)
    }
    timeout2.current = setTimeout(() => setButtonLoading2(false), 2000)
  }

  const handleButton3 = () => {
    setButtonLoading3(true)
    if (timeout3.current) {
      clearTimeout(timeout3.current)
    }
    timeout3.current = setTimeout(() => setButtonLoading3(false), 2000)
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Button loading={buttonLoading1} onClick={handleButton1}>
        Normal Button
      </Button>
      <Button loading={buttonLoading2} prevIcon="check" onClick={handleButton2}>
        Normal Icon Button
      </Button>
      <Button
        loading={buttonLoading3}
        icon={true}
        prevIcon="check"
        onClick={handleButton3}
      >
        Icon Button
      </Button>
    </div>
  )
}

export const LoadingInteraction = {
  render: () => <ButtonWithLoading />,
  play: async ({ canvas }) => {
    const button1 = canvas.getByRole('button', {
      name: 'Normal Button'
    })
    const button2 = canvas.getByRole('button', {
      name: 'Normal Icon Button'
    })
    const button3 = canvas.getByRole('button', {
      name: ''
    })
    console.log(button3)
    await userEvent.click(button1)
    expect(button1).toBeDisabled()
    expect(button2).not.toBeDisabled()
    expect(button3).not.toBeDisabled()

    await new Promise((resolve) => setTimeout(resolve, 2000))
    expect(button1).not.toBeDisabled()

    await userEvent.click(button2)
    expect(button2).toBeDisabled()
    expect(button1).not.toBeDisabled()
    expect(button3).not.toBeDisabled()

    await new Promise((resolve) => setTimeout(resolve, 2000))
    expect(button2).not.toBeDisabled()

    await userEvent.click(button3)
    expect(button3).toBeDisabled()
    expect(button1).not.toBeDisabled()
    expect(button2).not.toBeDisabled()

    await new Promise((resolve) => setTimeout(resolve, 2000))
    expect(button3).not.toBeDisabled()
  }
}
