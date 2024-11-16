function Empty({ ...props }) {
  const { resourceName } = props;
  return <p>No {resourceName} could be found.</p>;
}

export default Empty;
