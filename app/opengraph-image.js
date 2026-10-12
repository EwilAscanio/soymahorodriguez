import { ImageResponse } from "next/og";

export const alt = "Soy Maho Rodríguez — Fe, Propósito y Transformación";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #fff7fa 0%, #fbd5e6 100%)",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 42, letterSpacing: 9, color: "#d92568", fontWeight: 700 }}>
          FE · PROPÓSITO · TRANSFORMACIÓN
        </div>
        <div style={{ fontSize: 116, color: "#12204f", fontWeight: 700, marginTop: 28, lineHeight: 1.05 }}>
          Soy Maho Rodríguez
        </div>
        <div style={{ fontSize: 38, color: "#62677d", marginTop: 30, fontWeight: 500 }}>
          Historias, recursos y libros para vivir y enseñar la fe en familia.
        </div>
      </div>
    ),
    size
  );
}