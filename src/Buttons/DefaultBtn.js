export default function DefaultButton({ onClick, cta, style }) {
  return (
    <button style={{}} onClick={() => onClick()}>
      {cta}
    </button>
  );
}
