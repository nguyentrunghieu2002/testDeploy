// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import TabHeader from "./TabHeader";

const meta: Meta<typeof TabHeader> = {
  component: TabHeader,
};

export default meta;
type Story = StoryObj<typeof TabHeader>;

export const Default: Story = {
  args: {},
};
