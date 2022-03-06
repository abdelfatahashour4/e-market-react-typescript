type InputProps = {
  type: "text" | "number" | "password" | "email" | "tel";
  name: string;
  value: string | number;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
}
