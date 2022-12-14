import React from "react";
import "./Styles/Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 }, opacity: 0 }}
    >
      <section>
        <div className="SupportFeedback">
          <svg
            aria-hidden="true"
            width="96"
            height="96"
            class="fc-black-350 mb24 svg-spot spotMailLg"
          >
            <path
              opacity=".2"
              d="M8 37.9l34.75 21.51a5.8 5.8 0 005.88-.04l36.6-22.54A5.8 5.8 0 0194 41.8v46.4c0 3.2-2.6 5.8-5.8 5.8H13.8A5.8 5.8 0 018 88.2V37.9z"
            ></path>
            <path d="M11 7.5A4.5 4.5 0 0115.5 3h60A4.5 4.5 0 0180 7.5v18a1.5 1.5 0 01-3 0v-18c0-.83-.67-1.5-1.5-1.5h-60c-.83 0-1.5.67-1.5 1.5v18a1.5 1.5 0 01-3 0v-18zM31.55 13a3.2 3.2 0 00-3 2.59A3.4 3.4 0 0025.38 13a3.3 3.3 0 00-2.54 1.06 3.2 3.2 0 00-.8 2.61c0 3.03 3.96 5.82 5.63 7l.09.06a1.2 1.2 0 001.51 0l.26-.18c1.66-1.2 5.47-3.96 5.47-6.88 0-1.61-.48-3.67-3.45-3.67zM1 23.5A4.5 4.5 0 015.5 19h2a1.5 1.5 0 010 3h-2c-.83 0-1.5.67-1.5 1.5v4.36l41.23 26.2c.17.1.37.1.54 0L87 27.85V23.5c0-.83-.67-1.5-1.5-1.5h-2a1.5 1.5 0 010-3h2a4.5 4.5 0 014.5 4.5v62a4.5 4.5 0 01-4.5 4.5h-80A4.5 4.5 0 011 85.5v-62zm86 7.91L56.75 50.63l22.81 22.8a1.5 1.5 0 01-2.12 2.13L54.16 52.28l-6.78 4.3a3.5 3.5 0 01-3.76 0l-6.78-4.3-23.28 23.28a1.5 1.5 0 01-2.12-2.12l22.8-22.81L4 31.41V85.5c0 .83.67 1.5 1.5 1.5h80c.83 0 1.5-.67 1.5-1.5V31.41zM42.5 24a1.5 1.5 0 000 3h26a1.5 1.5 0 000-3h-26zM41 16.5c0-.83.67-1.5 1.5-1.5h17a1.5 1.5 0 010 3h-17a1.5 1.5 0 01-1.5-1.5zM42.5 33a1.5 1.5 0 000 3h16a1.5 1.5 0 000-3h-16z"></path>
          </svg>
          <h1>Support & feedback</h1>
          <p>
            <div>If you need help, please contact us. Visit our reference</div>{" "}
            and research information below to find out more advice.
          </p>
        </div>
        <br />
        <hr />
        <div className="MItitle">
          <h1>Services?</h1>
          <h1 className="talent">Talent?</h1>
          <h1>Anything Else?</h1>
        </div>
        <div className="MoreInfo">
          <h1 className="MoHeading">Services?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            perspiciatis exercitationem rem hic, nobis facilis ullam optio
            minima quod vitae expedita facere animi incidunt nostrum reiciendis,
            maxime vero sequi molestiae alias! Ab eveniet obcaecati repellat hic
            rerum asperiores consequatur minus eligendi earum saepe, assumenda
            provident doloremque animi libero expedita eos!
          </p>
          <h1 className="MoHeading">Talent?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            perspiciatis exercitationem rem hic, nobis facilis ullam optio
            minima quod vitae expedita facere animi incidunt nostrum reiciendis,
            maxime vero sequi molestiae alias! Ab eveniet obcaecati repellat hic
            rerum asperiores consequatur minus eligendi earum saepe, assumenda
            provident doloremque animi libero expedita eos!
          </p>

          <h1 className="MoHeading">Anything Else?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            perspiciatis exercitationem rem hic, nobis facilis ullam optio
            minima quod vitae expedita facere animi incidunt nostrum reiciendis,
            maxime vero sequi molestiae alias! Ab eveniet obcaecati repellat hic
            rerum asperiores consequatur minus eligendi earum saepe, assumenda
            provident doloremque animi libero expedita eos!
          </p>
        </div>
        <hr />
        <div className="moreLegalInfo">
          <h1>Other legal jargon and fluff for the site</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            exercitationem sunt quasi magnam ipsa eum. Praesentium, obcaecati
            officia nostrum pariatur suscipit culpa hic modi dolore ipsa minus
            id quia eaque molestiae. Iusto sit, repudiandae voluptas placeat
            praesentium ipsa illum officia.
          </p>
          <p className="NotRealMail">NotReal@NotAnActualEmail.com</p>
        </div>
        <br />
        <hr />
      </section>
    </motion.div>
  );
}
