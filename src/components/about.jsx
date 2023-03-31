export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              style={{ maxWidth: "100%", height: "auto", width: "auto9" }}
              src="img/about/hp.png"
              className="img-responsive"
              alt=""
            />{" "}
            <img
              style={{ maxWidth: "100%", height: "auto", width: "auto9" }}
              src="img/about/home.png"
              className="img-responsive"
              alt=""
            />{" "}
            <img
              style={{ maxWidth: "100%", height: "auto", width: "auto9" }}
              src="img/about/stats.png"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Contributors Information</h3>
              <div className="list-style">
                <div id="row">
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <div
                          key={`${d.name}-${i}`}
                          className="col-md-3 col-sm-6 team"
                        >
                          <div className="thumbnail">
                            {" "}
                            <i className={d.icon}></i>
                            <div className="caption">
                              <a href={d.href} target="_blank">
                                {d.name}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    : "loading"}
                </div>
                <h3>Project Information</h3>
                <div id="row">
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <div
                          key={`${d.name}-${i}`}
                          className="col-md-3 col-sm-6 team"
                        >
                          <div className="thumbnail">
                            {" "}
                            <i className={d.icon}></i>
                            <div className="caption">
                              <a href={d.href} target="_blank">
                                {d.name}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    : "loading"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
