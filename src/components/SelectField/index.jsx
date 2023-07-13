import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { handleKeyboardTrap, useClickAway } from "../../helpers";
import styles from "./SelectField.module.css";

export const SelectField = ({
  name,
  setValue,
  label,
  options,
  field,
  error,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const focusableElements = useRef(null);
  const selectContainerRef = useRef(null);
  const selectRef = useRef(null);
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(field.value ? field.value.toLowerCase() : "")
  );
  useClickAway(selectContainerRef, () => setIsActive(false));

  function handleSelectOption(e, option = false) {
    if (e.type === "click") {
      setIsActive(false);
      setValue(name, option);
    }

    if (e.type === "keydown") {
      if (e.key === "Enter") {
        setIsActive(!isActive);

        if (option) {
          setValue(name, option);
        }
      }

      if (isActive) {
        focusableElements.current.set(0, selectContainerRef.current);
        const firstTabStop = focusableElements.current.get(0);
        const lastTabStop = focusableElements.current.get(
          focusableElements.current.size - 1
        );

        handleKeyboardTrap(
          e,
          () => setIsActive(false),
          firstTabStop,
          lastTabStop
        );

        if (e.key === "ArrowDown") {
          e.preventDefault();

          if (e.target.nextElementSibling === selectRef.current) {
            e.target.nextElementSibling.firstElementChild.focus();
          }

          if (!e.target.nextElementSibling) return;
          e.target.nextElementSibling.focus();
        }

        if (e.key === "ArrowUp") {
          e.preventDefault();

          if (!e.target.previousElementSibling) return;
          e.target.previousElementSibling.focus();
        }
      }
    }
  }

  function handleChange() {
    setIsActive(true);
  }

  function getMap() {
    if (!focusableElements.current) {
      focusableElements.current = new Map();
    }
    return focusableElements.current;
  }

  function getRef(node, id) {
    const map = getMap();
    if (node) {
      map.set(id, node);
    } else {
      map.delete(id);
    }
  }

  return (
    <div className={`${styles.select_container}`}>
      <div
        ref={selectContainerRef}
        tabIndex={0}
        onClick={() => setIsActive(!isActive)}
        onKeyDown={handleSelectOption}
        className={`${styles.select_label} ${isActive && styles.active}
        ${error && !field.value && `${styles.error} shake_input`}`}
        role="button"
        aria-label={label}
        aria-haspopup="listbox"
      >
        <input
          type="text"
          className={styles.select_input}
          placeholder={label}
          {...field}
          onChange={(e) => {
            field.onChange(e);
            handleChange();
          }}
          {...props}
        />
        <Icon icon="iconamoon:arrow-down-2-bold" aria-hidden={true} />
      </div>

      {isActive && (
        <div
          className={`${styles.select}`}
          aria-expanded={true}
          role="listbox"
          ref={selectRef}
        >
          {filteredOptions.map((option, index) => (
            <div
              onClick={(e) => handleSelectOption(e, option)}
              onKeyDown={(e) => handleSelectOption(e, option)}
              role="option"
              key={option}
              className={styles.select_option}
              value={option}
              tabIndex={0}
              ref={(node) => getRef(node, index + 1)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
