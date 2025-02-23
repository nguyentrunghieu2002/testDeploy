import "./Card.css";

export interface CardProps {
  /** Title of the card */
  title: string;
  /** Description or content */
  description: string;
  /** Author name */
  author: string;
  /** Date of publication */
  date: string;
  /** Image source URL */
  imageSrc: string;
  /** Theme mode: light or dark */
  darkMode?: boolean;

  truncateDescription?: boolean;

  Islandscape?: boolean;

  onClick: () => void;

  cursor?: string;
}

export const Card = ({ onClick, cursor, ...props }: CardProps) => {
  return (
    <div
      className={`card ${props.darkMode ? "card--dark" : "card--light"}`}
      style={{
        display: "flex",
        gap: "40px",
        padding: "13px 44px 14px 15px",
        borderRadius: "24px",
        cursor: cursor || "default",
      }}
      onClick={onClick}
    >
      <img
        src={props.imageSrc}
        alt={props.title}
        className={!props.Islandscape ? "card__image" : "landscape__image"}
      />
      <div className={"card__content"}>
        <h2 className="card__title">
          {props.title.length > 40
            ? props.title.slice(0, 35) + "..."
            : props.title}
        </h2>
        <p
          className={`card__description ${
            props.truncateDescription ? "truncate" : ""
          }`}
        >
          {props.description && (
            <p style={{ color: "#7B7A81" }} className="card__description">
              {props.description}
            </p>
          )}
        </p>
        <div style={{ color: "#424246" }} className="card__author">
          {props.author}
        </div>
        <div style={{ color: "#7B7A81" }} className="card__date">
          {props.date}
        </div>
      </div>
    </div>
  );
};
