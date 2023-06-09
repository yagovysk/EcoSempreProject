import { useState } from "react";
import { Form } from "react-router-dom";
import { Icon } from "@iconify/react";

export function FormSearch({ placeholder }) {
  const [search, setSearch] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  function handleSubmit() {
    if (!search.trim()) {
      return;
    }
    onSearchActive(false);
  }

  return (
    <Form
      action="/search"
      onSubmit={handleSubmit}
      className={`search_form ${isTouched ? "active" : ""}`}
      onFocus={() => setIsTouched(true)}
      onBlur={() => setIsTouched(false)}
    >
      <Icon className="search_icon" icon="fa6-solid:magnifying-glass" />
      <input
        type="text"
        name="q"
        autoFocus={true}
        aria-label={placeholder}
        placeholder={placeholder}
        className="search_input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Form>
  );
}
