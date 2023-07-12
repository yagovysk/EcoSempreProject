import { forwardRef, useState } from "react";
import { Form, useNavigation, useSubmit } from "react-router-dom";
import { Icon } from "@iconify/react";

export const FormSearch = forwardRef(
  ({ placeholder, autoFocus = false }, ref) => {
    const [search, setSearch] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const navigation = useNavigation();

    return (
      <Form
        role="search"
        className={`search_form ${isTouched ? "active" : ""}`}
        onFocus={() => setIsTouched(true)}
        onBlur={() => setIsTouched(false)}
      >
        <Icon className="search_icon" icon="fa6-solid:magnifying-glass" />
        <input
          type="text"
          name="q"
          autoFocus={autoFocus}
          aria-label={placeholder}
          placeholder={placeholder}
          className="search_input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={ref && ref}
          disabled={navigation.state === "loading"}
        />
      </Form>
    );
  }
);
