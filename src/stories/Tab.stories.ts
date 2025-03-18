// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import Tab from "./Tab";

const meta: Meta<typeof Tab> = {
  component: Tab,
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {},
};
