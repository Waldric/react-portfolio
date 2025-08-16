import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade, Slide } from "react-awesome-reveal";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${form.name || "friend"}! I’ll let you informed.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <style>{`
        .contact-wrap {
          border-radius: 28px;
          padding: clamp(1.25rem, 3vw, 2rem);
          background: rgba(243, 243, 243, 0.81);
          box-shadow: 0 12px 40px rgba(41, 37, 89, .15);
        }
        .contact-title { letter-spacing: -.2px; }
        .contact-sub  { color: #70707a; }
        .pill {
          border-radius: 999px !important;
          background: rgba(255,255,255,.75);
          border: 1px solid rgba(0,0,0,.06);
          height: 54px;
          padding: 0 18px;
          backdrop-filter: blur(4px);
        }
        .pill::placeholder { color: #9aa0a6; }
        .area {
          border-radius: 20px !important;
          min-height: 180px;
          background: rgba(255,255,255,.78);
          border: 1px solid rgba(0,0,0,.06);
          padding: 16px 18px;
          resize: vertical;
        }
        .cta {
          border-radius: 999px;
          height: 56px;
          font-weight: 600;
          background: #2b2b2b;
          color: #fff;
          box-shadow: 0 10px 22px rgba(0,0,0,.18), inset 0 0 0 1px rgba(255,255,255,.06);
          transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
        }
        .cta:hover { filter: brightness(1.05); transform: translateY(-2px); box-shadow: 0 14px 26px rgba(0,0,0,.2); }
        .soft-shadow-under { position: relative; }
        .soft-shadow-under::after {
          content: "";
          position: absolute;
          left: 10%;
          right: 10%;
          bottom: -10px;
          height: 22px;
          border-radius: 999px;
          filter: blur(12px);
          background: rgba(0,0,0,.12);
          z-index: -1;
        }
      `}</style>

      <section id="contact" className="container py-5">
        <div className="contact-wrap">
          <Fade direction="up" triggerOnce>
            <div className="text-center mb-4">
              <h2 className="contact-title fw-bold display-6 mb-2">
                Contact me for any queries
              </h2>
              <p className="contact-sub">
                Feel free to contact me if you have any questions. I’m always
                open to learning and collaborating on new exciting projects.
              </p>
            </div>
          </Fade>
          <form onSubmit={handleSubmit}>
            <Fade direction="up" triggerOnce cascade damping={0.12}>
              <div className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                  <input
                    className="form-control pill"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    className="form-control pill"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </Fade>

            {/* Message area */}
            <Slide direction="up" triggerOnce>
              <div className="mb-4">
                <textarea
                  className="form-control area"
                  name="message"
                  placeholder="Your Message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </Slide>

            {/* Submit button */}
            <Fade direction="up" triggerOnce delay={120}>
              <div className="soft-shadow-under d-flex justify-content-center">
                <button type="submit" className="btn w-50 cta">
                  Submit
                </button>
              </div>
            </Fade>
          </form>
        </div>
      </section>
    </>
  );
}
