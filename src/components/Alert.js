import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Success:</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}
