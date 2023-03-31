export const Header = (props) => {
  return (
    <header id="header">
      <div
        className="intro"
        style={{
          backgroundImage: "url(/img/about/stats-pc.png)",
          maxWidth: "100%",
          height: "auto",
          width: "auto9",
        }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 style={{}}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://www.mlinkme.click"
                  target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Go To App
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
