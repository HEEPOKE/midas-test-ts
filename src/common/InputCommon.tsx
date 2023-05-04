import { Form } from "react-bootstrap";

interface InputCommonProps {
  id: string;
  label: string;
  type: string;
  min?: number | string;
  value: number | string;
  setValue: (value: number | string) => void;
  placeholder: string;
}

export default function InputCommon({
  id,
  label,
  type,
  min,
  value,
  setValue,
  placeholder,
}: InputCommonProps) {
  return (
    <>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        type={type}
        id={id}
        min={min}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}
