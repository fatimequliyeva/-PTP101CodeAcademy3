const Input = ({ label, type = "text", value, onChange, placeholder, name, error }) => {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
