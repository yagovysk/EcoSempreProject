import { forwardRef, useState } from "react";
import { useSubmit } from "react-router-dom";
import { Icon } from "@iconify/react";

export const FormSearch = forwardRef(
  ({ placeholder, onCloseSearch = false, autoFocus = false }, ref) => {
    const [search, setSearch] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const submit = useSubmit();

    function handleSubmit(e) {
      e.preventDefault();
      if (!search.trim()) {
        return;
      }
      submit(
        {
          q: search,
        },
        {
          method: "get",
          action: "/buscar?index",
        }
      );
      if (onCloseSearch) {
        onCloseSearch();
      }
    }

    return (
      <form
        onSubmit={handleSubmit}
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
        />
      </form>
    );
  }
);
