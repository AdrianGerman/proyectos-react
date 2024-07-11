import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";
import "./TextArea.css";

type Props = {
  type: SectionType;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
};

const commondStyles = { height: "200px" };

const getPlaceholder = ({ type, loading }: { type: SectionType; loading?: boolean }) => {
  if (type === SectionType.From) return "Introducir texto";
  if (loading === true) return "Cargando...";
  return "Traducción";
};

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SectionType.From
      ? commondStyles
      : { ...commondStyles, backgroundColor: "#303030", border: 0 };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as="textarea"
      disabled={type === SectionType.To}
      placeholder={getPlaceholder({ type, loading })}
      value={value}
      onChange={handleChange}
      className="textarea"
      style={styles}
    />
  );
};
