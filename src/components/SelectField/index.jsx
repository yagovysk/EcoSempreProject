import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useClickAway } from "../../helpers";
import styles from "./SelectField.module.css";

export const SelectField = ({
  name,
  setValue,
  label,
  options,
  field,
  error,
}) => {
  const [isActive, setIsActive] = useState(false);
  const selectRef = useRef(null);
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(field ? field.value.toLocaleLowerCase() : "")
  );
  useClickAway(selectRef, () => setIsActive(false), ["click", "touchstart"]);

  function handleKeyDown(e, option = false) {
    if (e.key === "Enter") {
      setIsActive(!isActive);

      if (option) {
        setValue(name, option);
      }
    }

    if (e.key === "ArrowDown") {
      if (!e.target.nextElementSibling) return;

      e.target.nextElementSibling.focus();
    }

    if (e.key === "ArrowUp") {
      if (!e.target.previousElementSibling) return;
      e.target.previousElementSibling.focus();
    }
  }

  function handleSelectOption(value) {
    setValue(name, value);
    setIsActive(false);
  }

  function handleChange() {
    setIsActive(true);
  }

  return (
    <div role="listbox" className={`${styles.select_container}`}>
      <div
        ref={selectRef}
        tabIndex={0}
        onClick={() => setIsActive(!isActive)}
        onKeyDown={handleKeyDown}
        className={`${styles.select_label} ${isActive && styles.active}
        ${error && !field.value && styles.error}`}
      >
        <input
          type="text"
          className={styles.select_input}
          placeholder={label}
          aria-label={label}
          {...field}
          onChange={(e) => {
            field.onChange(e);
            handleChange();
          }}
        />
        <Icon icon="iconamoon:arrow-down-2-bold" />
      </div>
      {isActive && (
        <div className={`${styles.select}`}>
          {filteredOptions.map((option) => (
            <div
              onClick={() => handleSelectOption(option)}
              onKeyDown={(e) => handleKeyDown(e, option)}
              role="option"
              key={option}
              className={styles.select_option}
              value={option}
              tabIndex={0}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
