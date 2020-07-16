import React from "react";

function Loading() {
  return (
    <div style={{ width: "100%", height: "100vh" ,opacity: "0.5"}}>
      <div className="spinner-grow text-muted" style={{marginLeft: "45%", marginTop: "15%"}}></div>
    </div>
  );
}

export default Loading;
