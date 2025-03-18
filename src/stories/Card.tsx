import "./Card.css";
import { Box, Card as CardRB, Image, Heading, Text } from "rebass";

export interface CardProps {
  header: string;
  description: string;
  imageSrc: string;
  darkMode?: boolean;
  onClick?: () => void;
  cursor?: string;
  truncateHeader?: boolean;
}

export const Card = (props: CardProps) => {
  const { onClick, cursor, darkMode, imageSrc, header, description } = props;

  return (
    <>
      <Box onClick={onClick}>
        <CardRB
          className={`card-container ${
            darkMode ? "card--dark" : "card--light"
          }`}
          style={{
            borderRadius: "16px",
            boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
            display: "flex",
            margin: "10px 0px",
            cursor: cursor || "default",
          }}
        >
          <Image className="card-img" src={imageSrc} />
          <div className="card-main">
            <div>
              <Heading
                style={{ margin: "13.28px 0px", fontSize: "16px" }}
                as="h2"
                className="truncate-header card-title"
              >
                {header}
              </Heading>
              <span className="card-des">{description}</span>
            </div>
            <a href="" className="card-link">
              5 Discussions &nbsp;{" "}
            </a>
          </div>
        </CardRB>
      </Box>
    </>
  );
};
