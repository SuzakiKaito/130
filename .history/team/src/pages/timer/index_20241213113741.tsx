import React, { useState, useEffect } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isOneMinuteCycle, setIsOneMinuteCycle] = useState(true);
  const [oneMinuteCount, setOneMinuteCount] = useState(0);
  const [starColor, setStarColor] = useState("gray");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setCount, setSetCount] = useState(1);

  const totalTime = isOneMinuteCycle ? 60 : 30;
  const timeLeft = minutes * 60 + seconds;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0 && seconds === 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          if (isOneMinuteCycle) {
            setOneMinuteCount((prevCount) => prevCount + 1);
            if (oneMinuteCount + 1 === 2) {
              setStarColor("yellow");
            }
            setMinutes(0);
            setSeconds(30);
          } else {
            setMinutes(1);
            setSeconds(0);
          }
          setIsOneMinuteCycle(!isOneMinuteCycle);
          setSetCount((prevCount) => prevCount + 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isActive, minutes, seconds, isOneMinuteCycle, oneMinuteCount]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "content" },
        React.createElement("p", { className: "timer" }, "タイマー"),
        React.createElement(
          "div",
          { className: "stars" },
          Array.from({ length: 5 }).map((_, i) =>
            React.createElement("figure", null, React.createElement("img", { src: "/images/star.svg", alt: "星" }))
          )
        ),
        React.createElement(
          "p",
          { className: "setName" },
          React.createElement("span", null, setCount),
          "セット目"
        ),
        React.createElement(
          "div",
          { className: "timerContent" },
          React.createElement("div", {
            className: "backgroundLayer",
            style: { background: `conic-gradient(#01EAFE ${progress}%, transparent 0)` },
          }),
          React.createElement(
            "div",
            { className: "timerBox" },
            React.createElement(
              "div",
              { className: "timerCircle" },
              React.createElement("p", { className: "studyTime" }, "勉強時間"),
              React.createElement("p", { className: "rest" }, "残り"),
              React.createElement(
                "p",
                { className: "timerFlex" },
                React.createElement("span", { className: "min" }, String(minutes).padStart(2, "0")),
                React.createElement("span", { className: "colon" }, ":"),
                React.createElement("span", { className: "sec" }, String(seconds).padStart(2, "0"))
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "buttonFlex" },
          React.createElement(
            "button",
            { className: "start", onClick: handleToggle },
            React.createElement(
              "figure",
              { className: "timerButton" },
              React.createElement("img", {
                src: isActive ? "/images/stopButton.png" : "/images/startButton.png",
                alt: isActive ? "タイマーストップボタン" : "タイマースタートボタン",
              })
            )
          ),
          React.createElement(
            "button",
            { className: "modal", onClick: toggleModal },
            React.createElement(
              "figure",
              { className: "modalButton" },
              React.createElement("img", {
                src: "/images/modalButton.png",
                alt: "モーダル画面に飛ぶボタン",
              })
            )
          ),
          isModalOpen &&
            React.createElement(
              "div",
              { className: "modalContent" },
              React.createElement("h4", null, "メッセージ"),
              React.createElement(
                "div",
                { className: "messageContent" },
                React.createElement(
                  "p",
                  null,
                  "今日は目標回数よりも多い回数の12セットも勉強できていて凄いです！",
                  React.createElement("br"),
                  React.createElement("br"),
                  "明日もこの調子で頑張っていきましょう！"
                )
              ),
              React.createElement("button", { onClick: toggleModal }, "戻る")
            )
        ),
        React.createElement(
          "footer",
          { className: "footerContent" },
          React.createElement("div", { className: "footerCircle" }),
          React.createElement(
            "div",
            { className: "footerBox" },
            React.createElement(
              "div",
              { className: "footerIcon" },
              ["homeIcon.png", "timerIcon.png", "crownIcon.png"].map((icon, i) =>
                React.createElement(
                  "figure",
                  { className: "footerImage" },
                  React.createElement("img", { src: `/images/${icon}`, alt: `${icon}アイコン` })
                )
              )
            )
          )
        )
      )
    )
  );
}
