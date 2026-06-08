"use client";

const droneRows = [
  "000000000000000000000000000000000000000000",
  "000111100000000000000000000000000011110000",
  "001111111000000000000000000000001111111000",
  "011111111110000000000000000000111111111100",
  "001111111111100000000000000111111111111000",
  "000011111111111111000011111111111111100000",
  "000000001111111111111111111111111110000000",
  "111111111111111111111111111111111111111111",
  "111111111111111111111111111111111111111111",
  "000000001111111111111111111111111110000000",
  "000011111111111111000011111111111111100000",
  "001111111111100000000000000111111111111000",
  "011111111110000000111100000000111111111100",
  "001111111000000011111111000000001111111000",
  "000111100000001111111111110000000011110000",
  "000000000000000001111100000000000000000000",
];

export default function BinaryDrone() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-24 z-10 w-full max-w-[520px] -translate-x-1/2 select-none px-4 opacity-70">
      <div className="binary-drone relative mx-auto">
        {droneRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center leading-none">
            {row.split("").map((cell, cellIndex) => {
              const visible = cell === "1";

              return (
                <span
                  key={`${rowIndex}-${cellIndex}`}
                  className={visible ? "binary-drone-bit" : "binary-drone-empty"}
                  style={{
                    animationDelay: `${(rowIndex + cellIndex) * 0.025}s`,
                  }}
                >
                  {visible ? (cellIndex + rowIndex) % 2 === 0 ? "1" : "0" : "0"}
                </span>
              );
            })}
          </div>
        ))}

        <div className="binary-drone-scan" />
      </div>
    </div>
  );
}