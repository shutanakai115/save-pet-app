import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { css } from "$styled-system/css";

import { StepIndicator } from "./StepIndicator";

const meta = {
  title: "Primitives/StepIndicator",
  component: StepIndicator,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    totalSteps: 3,
    currentStep: 1,
  },
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Step1: Story = {
  args: {
    currentStep: 1,
  },
};

export const Step2: Story = {
  args: {
    currentStep: 2,
  },
};

export const Step3: Story = {
  args: {
    currentStep: 3,
  },
};

export const FiveSteps: Story = {
  render: () => (
    <div className={css({ display: "grid", gap: 4 })}>
      <StepIndicator totalSteps={5} currentStep={1} />
      <StepIndicator totalSteps={5} currentStep={3} />
      <StepIndicator totalSteps={5} currentStep={5} />
    </div>
  ),
};
