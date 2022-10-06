/** @format */

function App() {
  const iOS: boolean =
    ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.platform.includes("Mac") && "ontouchend" in document);

  return (
    <div
      style={{
        display: "flex",
        width: `100%`,
        height: `100vh`,
        justifyContent: "center",
        alignItems: "center",
      }}>
      {iOS ? "ios" : "android"}
    </div>
  );
}

export default App;
