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
    header: "Wear a facemask",
    description: "This is 1 line description",
    imageSrc:
      "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    header: "Wear a facemask",
    description: "This is 1 line description",
    imageSrc:
      "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    darkMode: true,
  },
};

export const LongDescription: Story = {
  args: {
    header: "Wear a facemask",

    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker",
    imageSrc:
      "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export const LandscapeImage: Story = {
  args: {
    header: "Wear a facemask",
    description: "This is Landscape Image",

    imageSrc:
      "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600",

    cursor: ""
  },
};

export const OneLineText: Story = {
  args: {
    header: "Wear a facemask",
    description: "This is 1 line description",
    imageSrc:
      "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    darkMode: false,
  },
};

export const LongTitleAndDescription: Story = {
  args: {
    truncateHeader: true,
    header: "This is very very long title that should be truncated",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker",
    imageSrc:
      "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export const NoDescription: Story = {
  args: {
    header: "No Description Example",
    description: "", // Không có mô tả
    imageSrc:
      "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

export const ClickableCard: Story = {
  args: {
    header: "Clickable Card",
    description: "This card is clickable.",
    imageSrc:
      "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    darkMode: false,
    onClick: action("card"),
    cursor: "pointer",
  },
};

// export const DarkMode: Story = {
//   args: {
//     title: "How Life Insurance",
//     description: "Life was good f.",
//     author: "Theresa Graves",
//     date: "June 2, 2020",
//     imageSrc:
//       "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
//     darkMode: true,
//   },
// };

// export const LongDescription: Story = {
//   args: {
//     title: "A Very Long Description",
//     description:
//       "This is an extremely long description that should be truncated after a few lines. If the text is too long, it should automatically be clipped and replaced with an ellipsis (...) to prevent overflow.",
//     author: "Theresa Graves",
//     date: "Feb 20, 2025",
//     imageSrc:
//       "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
//     darkMode: false,
//     truncateDescription: true,
//   },
// };

// export const LandscapeImage: Story = {
//   args: {
//     title: "Landscape Image",
//     description: "This is Landscape Image",
//     author: "Theresa Graves",
//     date: "Feb 20, 2025",
//     imageSrc:
//       "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=600",
//     darkMode: false,
//     Islandscape: true,
//   },
// };

// export const OneLineText: Story = {
//   args: {
//     title: "How Life Insurance",
//     description: "This is 1 line description",
//     author: "Theresa Graves",
//     date: "June 2, 2020",
//     imageSrc:
//       "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
//     darkMode: false,
//   },
// };

// export const LongTitleAndDescription: Story = {
//   args: {
//     title: "This is  very very long title that should be truncated",
//     description: "  to maintain a good design.",
//     author: "Theresa Graves",
//     date: "April 10, 2025",
//     imageSrc:
//       "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
//     darkMode: false,
//     truncateDescription: true,
//   },
// };

// export const NoDescription: Story = {
//   args: {
//     title: "No Description Example",
//     description: "", // Không có mô tả
//     author: "Theresa Graves",
//     date: "June 12, 2025",
//     imageSrc:
//       "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",
//     darkMode: false,
//   },
// };

// export const ClickableCard: Story = {
//   args: {
//     title: "Clickable Card",
//     description: "This card is clickable.",
//     author: "Theresa Graves",
//     date: "June 12, 2025",
//     imageSrc:
//       "https://s3-alpha-sig.figma.com/img/6446/fbe3/0fabb215373086e908811abca0233727?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FDYwsPunCgnhkyIrgeoT-oDDbsI10~zIbg3PzWgy7nzN-AMe46jJEXrVme5FEMH9ZRlyYqM9yVWXmUrLYoNnbjXypwcmk-JuRJeT4PIr7PRFvaJ3YexsUiRmSs2nZndMvz4SfVkFIxt-Zu6NGjKhukcJkXXegRi809HTobUzpYgFvAZkYJ-XARJlsR9fkgJwTZMzFA6a5FnzMHMugMEciU3KKf0OvVmNbk9FuYbfUd-xlYTdwCtBbeHvT27dNznIwlktoKmWc43T5MU0PUTZFOEzl4PneEnyTx2uKV7pnRr63nV~PtmYQfDjsSMzv~SKr4D0TmlY6PrvktJxIRQBuw__",

//     darkMode: false,
//     onClick: action("card"),
//     cursor: "pointer",
//   },
// };
