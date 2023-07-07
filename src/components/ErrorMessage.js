export function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>💀 {message}</span>
    </p>
  );
}
