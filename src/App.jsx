import { useState } from "react";

export function App() {
  const [fast, setFast] = useState(false);
  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);

  const description = [
    fast ? "Fast" : "Slow",
    good ? "Good" : "Bad",
    cheap ? "Cheap" : "Expensive",
  ].join(" & ");

  return (
    <div className="App">
      <div className="center">
        <p>Your product will be {description}</p>

        <div className="item">
          <p>Fast</p>
          <div
            className={"switch" + (fast ? " active" : "")}
            onClick={() => {
              if (good && cheap) {
                if (Math.random() > 0.5) {
                  setCheap(false);
                } else {
                  setGood(false);
                }
              }
              setFast(!fast);
            }}
          />
        </div>

        <div className="item">
          <p>Good</p>
          <div
            className={"switch" + (good ? " active" : "")}
            onClick={() => {
              if (fast && cheap) {
                if (Math.random() > 0.5) {
                  setCheap(false);
                } else {
                  setFast(false);
                }
              }
              setGood(!good);
            }}
          />
        </div>

        <div className="item">
          <p>Cheap</p>
          <div
            className={"switch" + (cheap ? " active" : "")}
            onClick={() => {
              if (fast && good) {
                if (Math.random() > 0.5) {
                  setGood(false);
                } else {
                  setFast(false);
                }
              }
              setCheap(!cheap);
            }}
          />
        </div>
      </div>
    </div>
  );
}
