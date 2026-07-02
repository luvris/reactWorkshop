export default function StatusMessage({ counterNum }) {
  return (
    <div>
      {counterNum === 0 ? (
        <p style={{ color: "red" }}>You have not clicked yet</p>
      ) : counterNum >= 1 && counterNum <= 9 ? (
        <p style={{ color: "blue" }}>Keep clicking!</p>
      ) : (
        <p style={{ color: "green" }}>Wow! that's a lot</p>
      )}
    </div>
  );
}