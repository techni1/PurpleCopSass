import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const NameChar = ({ name }: any) => {
  // Define a mapping of letters to colors
  const letterColorMap: { [key: string]: string } = {
    A: "#FF5733", // Red
    B: "#33FF57", // Green
    C: "#3357FF", // Blue
    D: "#FF33A1", // Pink
    E: "#FFB733", // Orange
    F: "#A133FF", // Purple
    G: "#33FFF3", // Cyan
    H: "#FF8C33", // Light Orange
    I: "#B22222", // Lime
    J: "#8C33FF", // Violet
    K: "#FF3333", // Crimson
    L: "#33A1FF", // Sky Blue
    M: "#FFD700", // Gold
    N: "#FF69B4", // Hot Pink
    O: "#87CEEB", // Light Blue
    P: "#FF6347", // Tomato
    Q: "#6A5ACD", // Slate Blue
    R: "#FF4500", // Orange Red
    S: "#5F9EA0", // Turquoise
    T: "#EE82EE", // Violet
    U: "#4682B4", // Steel Blue
    V: "#DAA520", // Goldenrod
    W: "#9ACD32", // Yellow Green
    X: "#B22222", // Firebrick
    Y: "#5F9EA0", // Cadet Blue
    Z: "#FF7F50", // Coral
  };

  const splitName = name?.split("");
  const char = splitName[0]?.toUpperCase(); // Get the first character in uppercase
  const color = char ? letterColorMap[char] : "#000000"; // Default to black if no match

  return (
    <>
      {/* <pre>{JSON.stringify(name, undefined, 2)}</pre> */}
      <OverlayTrigger overlay={<Tooltip>{name}</Tooltip>}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            color: "white",
            backgroundColor: color,
            border: `2px solid ${color}`,
            fontSize: "16px",
            fontWeight: "bold",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "auto",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {char}
        </div>
      </OverlayTrigger>
    </>
  );
};

export default NameChar;
