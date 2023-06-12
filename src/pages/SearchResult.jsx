import { Link, useFormAction } from "react-router-dom";
import { HeaderSection } from "../components/HeaderSection";
import { AsideBlog } from "../components/AsideBlog";
import { useState } from "react";
import { useGetData } from "../helpers";
import { Pagination } from "../components/Pagination";
import { FormSearch } from "../components/FormSearch";
import "./SearchResult.css";

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Busca",
  },
];
const POSTS_PER_PAGE = 3;

export function SearchResult() {
  const [pageIndex, setPageIndex] = useState(0);
  const query = useFormAction().replace("/search?q=", "");
  const posts = useGetData(`/articles?title_like=${query}`, [...query]);

  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsPerPage = posts.slice(startIndex, endIndex);

  return (
    <main className="main_search_result">
      <HeaderSection
        title="Resultados da busca"
        linksMenu={linksMenu}
        className={"header"}
      />

      <div className={`container_content container`}>
        {posts.length > 0 ? (
          <div className={"posts_container"}>
            {postsPerPage.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                imgURL={post.imgURL}
              />
            ))}

            <Pagination
              postsPerPage={POSTS_PER_PAGE}
              pageIndex={pageIndex}
              onNextPage={setPageIndex}
              postsLength={posts.length}
            />
          </div>
        ) : (
          <section className={"error_wrapper"}>
            <h2 className={"title"}>Nenhum Resultado Encontrado!</h2>
            <p className={"content"}>
              Desculpe, não encontramos resultados para a sua busca. Mas não
              desista! Continue explorando nosso site para encontrar outras
              informações valiosas sobre reciclagem e sustentabilidade
            </p>

            <FormSearch placeholder="Pesquisar..." />
          </section>
        )}

        <AsideBlog />
      </div>
    </main>
  );
}

function Card({ id, title, content, imgURL }) {
  return (
    <article className={"card_wrapper"}>
      <div className={"card_img_wrapper"}>
        <img src={imgURL} alt={title} />
      </div>

      <section className={"card_texts_wrapper"}>
        <h2 className={"title"}>{title}</h2>
        <p className={"content"}>{content}</p>
        <Link to={`/articles/${id}`} className={`link_more ${"card_link"}`}>
          Saiba Mais
        </Link>
      </section>
    </article>
  );
}
