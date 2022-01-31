import { useState } from "react";

type FormObject = { [key: string]: any };

export const useForm = (
  initialValues: FormObject
): [
  values: FormObject,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  resetValues: () => void
] => {
  const [values, setValues] = useState<FormObject>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const resetValues = () => {
    setValues(initialValues);
  };

  return [values, handleChange, resetValues];
};
