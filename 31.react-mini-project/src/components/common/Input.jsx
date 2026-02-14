export default function Input({ label, ...props }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:8}}>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
}

