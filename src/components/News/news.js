import React from "react";

export function news(title, content) {
  const styles = {
    container: {
      textAlign: "left !important",
      display: "grid",
      gridTemplateColumns: "1fr 5fr",
      alignItems: "center"
    },
    title: {
      color: "black",
      fontWeight: "400",
      fontSize: "1.5em",
    },
    content: {
      color: "grey",
    },
    blankLine: {
      height: "2px",
      width: "100%",
      background: "#02a89e",
    },
    img: {
      margin: "5px",
      height: "70px",
      width: "70px",
      background: "grey",
      borderRadius: "50%",
    },
  };
  return (
    <div style={styles.container}>
      <div>
        <img
          src={require("assets/img/resilient.jpg")}
          alt="Image"
          style={styles.img}
        />
      </div>
      <div>
        <div style={styles.title}>{title}</div>
        <div style={styles.blankLine}> </div>
        <div style={styles.content}>{content}</div>
      </div>
    </div>
  );
}

// Chairperson
// Accountant
// Secretary
