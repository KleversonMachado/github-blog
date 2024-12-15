import { useForm } from "react-hook-form";
import { SearchForm, SearchInput } from "./styled";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { PostsContext } from "../../../../contexts/PostsContext";

const newSearch = z.object({
  search: z.string(),
});

type newSearchInputs = z.infer<typeof newSearch>;

export function SearchPost() {
  const { fetchPosts } = useContext(PostsContext);

  const { register, handleSubmit } = useForm<newSearchInputs>({
    resolver: zodResolver(newSearch),
    defaultValues: {
      search: "",
    },
  });

  function handleSearch(data: newSearchInputs) {
    fetchPosts(data.search);
  }

  return (
    <SearchForm onSubmit={handleSubmit(handleSearch)}>
      <SearchInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register("search")}
      />
    </SearchForm>
  );
}
