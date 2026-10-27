    const parent = React.createElement("div", {id: "parent"},
       React.createElement("div", {id: "child"},
      [React.createElement("h1", {}, "Neem Karoli Baba ki jay"),
      React.createElement("h2", {}, "Neem Karoli Baba ki jay"),
      React.createElement("h3", {}, "Neem Karoli Baba ki jay")]
    ),
      React.createElement("div", {id: "child2"},
      [React.createElement("h1", {}, "Neem Karoli Baba"),
      React.createElement("h2", {}, "Neem Karoli Baba"),
      React.createElement("h3", {}, "Neem Karoli Baba")]
    )
   );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);