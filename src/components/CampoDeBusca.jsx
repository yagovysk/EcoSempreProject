import { Icon } from "@iconify/react";
import { FormSearch } from "./FormSearch";
import "./CampodeBusca.css";

export function CampodeBusca({ onSearchActive }) {
  return (
    <div className="search_container">
      <button
        onClick={() => onSearchActive(false)}
        type="button"
        className="close_search"
      >
        <Icon icon="ic:round-close" />
      </button>

      <FormSearch placeholder="Digite aqui para buscar" />
    </div>
  );
}
