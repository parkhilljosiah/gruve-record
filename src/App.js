function App() {
  function handleTheme() {
    let body = document.getElementById("body");

    if (body.className === "dark") {
      body.className = "light";
    } else {
      body.className = "dark";
    }
  }

  return (
    <div>
      <button onClick={handleTheme}>theme</button>
    </div>
  );
}

export default App;
