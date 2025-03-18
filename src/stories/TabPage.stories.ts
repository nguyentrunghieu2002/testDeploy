import type { Meta, StoryObj } from "@storybook/react";

import TabPage from "./TabPage";

const meta: Meta<typeof TabPage> = {
  component: TabPage,
};

export default meta;
type Story = StoryObj<typeof TabPage>;

export const Default: Story = {
  args: {},
};
