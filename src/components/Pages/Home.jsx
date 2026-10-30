import { Link } from "react-router-dom";

const Home = () => {
  const gradientBackground = {
    backgroundImage:
      "linear-gradient(135deg, rgba(116,92,252,0.95) 0%, rgba(63,241,253,0.9) 100%)",
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section py-6" style={gradientBackground}>
        <div className="container py-5">
          <div className="columns is-centered">
            <div className="column is-8 has-text-centered">
              <h1 className="title is-1 has-text-weight-bold has-text-white mb-4">
                React App Portfolio
              </h1>
              <p
                className="subtitle is-5 has-text-white-ter px-4"
                style={{ lineHeight: "1.6" }}
              >
                A modern showcase web application built using{" "}
                <strong>React JS 18</strong>, <strong>React Router v6</strong>,{" "}
                <strong>Axios</strong>, <strong>Redux Toolkit</strong>, and
                styled with <strong>Bulma CSS</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section py-5" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="has-text-centered mb-5">
            <h2 className="title is-4 has-text-dark has-text-weight-bold">
              Core Technologies
            </h2>
            <p className="subtitle is-6 has-text-grey">
              Tools and libraries powering this application
            </p>
          </div>

          <div className="columns is-multiline is-centered">
            {[
              "React JS 18",
              "Hooks",
              "React Router Version 6",
              "Axios",
              "React-Redux",
              "Bulma CSS",
              "API Call",
              "Vite JS",
              "@reduxjs/toolkit",
            ].map((tech, index) => (
              <div
                className="column is-3-tablet is-one-fifth-desktop"
                key={index}
              >
                <div
                  className="box p-4 has-text-centered h-100"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                    transition: "all 0.2s ease-in-out",
                    background: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0,0,0,0.06)";
                    e.currentTarget.style.borderColor = "#3273dc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 4px rgba(0,0,0,0.02)";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                  }}
                >
                  <p className="has-text-weight-semibold is-size-6 has-text-dark">
                    {tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section py-6">
        <div className="container">
          <div className="has-text-centered mb-6">
            <h2 className="title is-2 has-text-weight-bold has-text-dark">
              Explore Projects
            </h2>
            <p className="subtitle is-6 has-text-grey">
              Select any project card below to view its live implementation
            </p>
          </div>

          <div className="columns is-multiline is-centered">
            {[
              { path: "/WordCounter", name: "Word Counter" },
              { path: "/PokemonDash", name: "Pokemon Dash" },
              { path: "/DigitalClock", name: "Digital Clock" },
              { path: "/StopWatch", name: "Stop Watch" },
              { path: "/RandomUser", name: "Random User" },
              { path: "/InfiniteScroll", name: "Infinite Scroll" },
              { path: "/FormValidationUsinguseReducer",name: "FormValidationUsinguseReducer"},
              { path: "/WeatherChecker", name: "Weather Checker" },
              { path: "/CRUDRT", name: "CRUD With ReduxToolkit" },
              { path: "/LazyLoading", name: "Lazy Loading" },
              { path: "/DynamicForm", name: "Dynamic Form" },
              { path: "/ColorGenerator", name: "ColorGenerator" },
            ].map((project, index) => (
              <div
                className="column is-3-tablet is-one-quarter-desktop"
                key={index}
              >
                <Link
                  to={project.path}
                  style={{
                    textDecoration: "none",
                    display: "block",
                    height: "100%",
                  }}
                >
                  <div
                    className="box p-5 has-text-centered h-100 is-flex is-align-items-center is-justify-content-center"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                      transition: "all 0.2s ease-in-out",
                      background: "#ffffff",
                      minHeight: "80px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 20px rgba(50, 115, 220, 0.12)";
                      e.currentTarget.style.borderColor = "#3273dc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 6px rgba(0,0,0,0.03)";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }}
                  >
                    <span className="is-size-6 has-text-weight-bold has-text-dark">
                      {project.name}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;