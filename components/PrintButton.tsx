"use client";

export function PrintButton() {
  return <button className="button button-dark print-button" type="button" onClick={() => window.print()}>PRINT / SAVE AS PDF ↗</button>;
}
