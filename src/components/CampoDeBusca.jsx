import { useState } from "react";
import { Icon } from "@iconify/react";
import styles from "../components/CampoDeBusca.module.css";
import { Form } from "react-router-dom";

export function CampoDeBusca({ onSearchActive }) {
  const [search, setSearch] = useState("");

  function handleSubmit() {
    if (!search.trim()) {
      return;
    }
    onSearchActive(false);
  }

  return (
    <div className={styles.search_container}>
      <button
        onClick={() => onSearchActive(false)}
        type="button"
        className={styles.close_search}
      >
        <Icon icon="ic:round-close" />
      </button>

      <Form
        action="/search"
        onSubmit={handleSubmit}
        className={`${styles.search_form} ${search.trim() && styles.active}`}
      >
        <Icon
          className={styles.search_icon}
          icon="fa6-solid:magnifying-glass"
        />
        <input
          type="text"
          name="q"
          autoFocus={true}
          aria-label="Digite aqui para buscar"
          placeholder="Digite aqui para buscar"
          className={styles.search_input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
    </div>
  );
}
