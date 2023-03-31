export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-md-8 col-md-offset-2 mb-4"
                >
                  {" "}
                  <i className={d.icon}></i>
                  <img
                    style={{ maxWidth: "100%", height: "auto", width: "auto9" }}
                    src={d.gif}
                    alt=""
                  />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
