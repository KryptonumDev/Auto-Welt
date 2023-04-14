const React = require("react");
const GlobalLayout = require("./src/components/Layouts/GlobalLayout").default;

exports.wrapPageElement = ({ element, props }) => {
  return (
    <GlobalLayout {...props}>{element}</GlobalLayout>
  );
};