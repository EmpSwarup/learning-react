import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Hello!</h1>
      <p className="desc">This is used by me to learn React JS</p>
      <img
        src="https://media1.giphy.com/media/rgbAtUv07WAW4/giphy.gif?cid=ecf05e47w2ojn77c4nqvtlq5h34cry0ma9y2yfng9zwgchob&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="GIF"
        className="gif"
      />
      <a
        href="https://github.com/EmpSwarup/learning-react"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        GitHub
      </a>
    </div>
  );
}

export default App;
