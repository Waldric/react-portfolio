import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  // === add this helper ===
  const HEADER_OFFSET = 84; // tweak if your navbar height changes
  const scrollToId = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  // =======================

  return (
    <>
      <style>{`
        .app-navbar {
          backdrop-filter: saturate(140%) blur(6px);
          background: rgba(255,255,255,.9);
          box-shadow: 0 2px 12px rgba(0,0,0,.06);
          padding: 20px;
        }
        .brand { letter-spacing: .2rem; font-weight: 800; }
        .nav-link { font-weight: 500; color: #2b2b2b; position: relative; padding: .5rem .75rem !important; border-radius: .5rem; }
        .nav-link:hover { color: #0d6efd; }
        .nav-link.active { color: #0d6efd; }
        .nav-link.active::after,
        .nav-link:hover::after{
          content:"";
          position:absolute; left:.6rem; right:.6rem; bottom:.25rem;
          height:2px; border-radius:2px; background:#0d6efd;
        }
        section { scroll-margin-top: 84px; } /* keeps anchors below sticky navbar */
        html { scroll-behavior: smooth; }
      `}</style>

      <nav className="navbar navbar-expand-lg sticky-top app-navbar">
        <div className="container">
          {/* use the helper here too */}
          <a
            className="navbar-brand brand"
            href="#about"
            onClick={(e) => scrollToId(e, "about")}
          >
            WEBDEVT
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto me-lg-4 gap-lg-3">
              <li className="nav-item">
                {/* fixed: About Me uses scrollToId */}
                <a
                  className="nav-link"
                  href="#about"
                  onClick={(e) => scrollToId(e, "about")}
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                {/* these can stay as plain anchors if they already work */}
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
