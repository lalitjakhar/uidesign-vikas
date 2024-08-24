import PropTypes from "prop-types";

const ClassComponent = ({ data }) => {
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

ClassComponent.propTypes = {
  data: PropTypes.string.isRequired,
};
export default ClassComponent;
