import { usePosts } from "../PostProvider";

function Results() {
  const x = usePosts();

  const { posts } = x;

  return <p>{posts.length} fake posts found</p>;
}

export default Results;
