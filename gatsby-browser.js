const React = require("react");
const GlobalLayout = require("./src/components/Layouts/GlobalLayout").default;
const AnimatePresence = require("framer-motion").AnimatePresence;
const gsap = require("gsap").gsap;

exports.wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <GlobalLayout {...props}>{element}</GlobalLayout>
    </AnimatePresence>
  );
};

exports.onClientEntry = () => {
  window.addEventListener("load", () => {
    const body = document.querySelector("body");
    body.className = document.body.className.replace(/\bno-js\b/, "");
    gsap.from(body, { opacity: 0, duration: 0.7, ease: "Power3.easeInOut" });
  });
};
