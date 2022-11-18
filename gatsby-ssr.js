const React = require("react");
const GlobalLayout = require("./src/components/Layouts/GlobalLayout").default;
const AnimatePresence = require("framer-motion").AnimatePresence;

exports.wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence mode="wait">
      <GlobalLayout {...props}>{element}</GlobalLayout>
    </AnimatePresence>
  );
};

exports.onRenderBody = ({ setBodyAttributes, setHeadComponents, setHtmlAttributes }) => {
  setBodyAttributes({
    className: "no-js",
  });
  setHtmlAttributes({ lang: "pl" })
  setHeadComponents([
      <link
          rel="preload"
          href="/fonts/RobotoCondensed-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key="interFont"
      />,
      <link
          rel="preload"
          href="/fonts/RobotoCondensed-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key="interFont"
      />,
      <link
          rel="preload"
          href="/fonts/RobotoCondensed-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          key="interFont"
      />,
  ])
}