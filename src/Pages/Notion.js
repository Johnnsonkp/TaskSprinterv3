import React from "react";

function Notion() {
  return (
    <div style={{ height: "90vh" }}>
      <iframe
        style={{
          boxShadow: "0 0 5px 3px rgba(100 100 100 / 30%)",
          borderRadius: "10px",
        }}
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="100%"
        // src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
        src="https://www.notioniframe.com/notion/196xw03js38m"
      ></iframe>
    </div>
  );
}

export default Notion;
