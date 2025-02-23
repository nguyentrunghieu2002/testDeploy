import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    darkMode: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  args: {
    title: "How Life Insurance Saved My Family",
    description:
      "Life was good for my family in 1989. My father was the well-paid president of a marketing company.",
    author: "Theresa Graves",
    date: "June 2, 2020",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    title: "How Life Insurance Saved My Family",
    description:
      "Life was good for my family in 1989. My father was the well-paid president of a marketing company.",
    author: "Theresa Graves",
    date: "June 2, 2020",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
    darkMode: true,
  },
};

export const LongDescription: Story = {
  args: {
    title: "A Very Long Description Example",
    description:
      "This is an extremely long description that should be truncated after a few lines. If the text is too long, it should automatically be clipped and replaced with an ellipsis (...) to prevent overflow.",
    author: "Theresa Graves",
    date: "Feb 20, 2025",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
    darkMode: false,
    truncateDescription: true,
  },
};

export const LandscapeImage: Story = {
  args: {
    title: "Landscape Image",
    description: "This is Landscape Image",
    author: "Theresa Graves",
    date: "Feb 20, 2025",
    imageSrc:
      "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600",
    darkMode: false,
    Islandscape: true,
  },
};

export const OneLineText: Story = {
  args: {
    title: "How Life Insurance Saved My Family",
    description: "This is 1 line description",
    author: "Theresa Graves",
    date: "June 2, 2020",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
    darkMode: false,
  },
};

export const LongTitleAndDescription: Story = {
  args: {
    title:
      "This is a very very very very very long title that should be truncated",
    description:
      "This description is also extremely long and should be limited to a certain number of lines to maintain a good design.",
    author: "Theresa Graves",
    date: "April 10, 2025",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
    darkMode: false,
    truncateDescription: true,
  },
};

export const NoDescription: Story = {
  args: {
    title: "No Description Example",
    description: "", // Không có mô tả
    author: "Theresa Graves",
    date: "June 12, 2025",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
    darkMode: false,
  },
};

export const ClickableCard: Story = {
  args: {
    title: "Clickable Card",
    description: "This card is clickable.",
    author: "Theresa Graves",
    date: "June 12, 2025",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",

    darkMode: false,
    onClick: action("card"),
    cursor: "pointer",
  },
};
