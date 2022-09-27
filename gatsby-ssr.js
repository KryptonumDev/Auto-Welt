const React = require("react")
const GlobalLayout = require("./src/components/Layouts/GlobalLayout").default
const AnimatePresence = require("framer-motion").AnimatePresence

exports.wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <GlobalLayout {...props}>{element}</GlobalLayout>
    </AnimatePresence>
  )
}

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "no-js",
  })
}