import React, { useState, useRef, useEffect } from "react";
import OutsideClickWrapper from "lib/components/OutsideClickWrapper";
const cn = require("classnames");

type Props = {
  value: any;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  callback?: () => void;
  textClassNames?: string;
  inputClassNames?: string;
};

const EditableTextField: React.FC<Props> = ({
  value,
  name,
  placeholder,
  onChange,
  callback,
  textClassNames,
  inputClassNames,
}) => {
  const [isEditing, setIsEditing] = useState<Boolean>(value === "");
  const valueRef = useRef<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current!.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const onOutsideClick = () => {
    if (valueRef.current !== "") {
      setIsEditing(false);
      if (callback) {
        callback();
      }
    }
  };

  return (
    <>
      {isEditing ? (
        <OutsideClickWrapper
          classNames="w-full"
          onOutsideClick={onOutsideClick}
        >
          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            name={name}
            className={cn(
              "placeholder-stone-400 focus:outline-0",
              inputClassNames
            )}
            placeholder={placeholder}
          />
        </OutsideClickWrapper>
      ) : (
        <p
          style={{ wordWrap: "break-word" }}
          className={cn(textClassNames)}
          onClick={() => {
            setIsEditing(true);
          }}
        >
          {value}
        </p>
      )}
    </>
  );
};

export default EditableTextField;
