import { useState } from "react";

const ColorGenerator = () => {
    const [color, setColor] = useState("#ffffff");
    const [colorType, setColorType] = useState("hex");
    const hexCodes = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];

    const generateColor = () => {
        if (colorType === "hex") {
            let hexColor = "#";

            for (let i = 0; i < 6; i++) {
                const index = Math.floor(Math.random() * 15);
                hexColor += hexCodes[index];
            }

            setColor(hexColor);
        } else {
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);

            const rgbColor = `rgb(${r}, ${g}, ${b})`;
            setColor(rgbColor);
        }
    };
    return (
        <div
            style={{
                width: "100dvw",
                height: "100dvh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: color,
            }}
        >
            <div
                style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "1rem 2rem",
                    borderRadius: "10px",
                    fontSize: "2rem",
                    fontWeight: "bold",
                }}
            >
                {color.toUpperCase()}
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <button
                    onClick={generateColor}
                    style={{
                        backgroundColor: "#5E3FD7",
                        color: "#fff",
                        padding: "1rem 2rem",
                        boxShadow: "1px 1px 1px #3e3e3e",
                    }}
                >
                    Generate Color
                </button>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "100%",
                    }}
                >
                    <div>
                        <input
                            type="radio"
                            id="hex"
                            checked={colorType === "hex" && true}
                            onChange={() => setColorType("hex")}
                        />{" "}
                        <label htmlFor="hex">HEX</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="rgb"
                            checked={colorType === "rgb" && true}
                            onChange={() => setColorType("rgb")}
                        />{" "}
                        <label htmlFor="rgb">RGB</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorGenerator;
