import { Icon } from "@iconify/react";
import { FormSearch } from "./FormSearch";
import "./CampoDeBusca.css";

export function CampoDeBusca({ onSearchActive }) {
  return (
    <div className="search_container">
      <button
        onClick={() => onSearchActive(false)}
        type="button"
        className="close_search"
      >
        <Icon icon="ic:round-close" />
      </button>

      <FormSearch
        onSearchActive={onSearchActive}
        placeholder="Digite aqui para buscar"
      />
    </div>
  );
}
