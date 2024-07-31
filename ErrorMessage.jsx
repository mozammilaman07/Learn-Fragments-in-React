const ErrorMessage = ({ items }) => {
  return <>{items.length == 0 && <h2>Bucket is empty</h2>}</>;
};
export default ErrorMessage;
