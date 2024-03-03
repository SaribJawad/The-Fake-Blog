import SearchPosts from "./SearchPosts";
import Results from "./Results";

import { usePosts } from "../PostProvider";

function Header() {
  // returns the value that we have passed into the context (PostContext)
  // consuming content
  // same as before we have just created a hook for the postContext so we dont have to write it again and agian
  const x = usePosts();

  const { onClearPosts } = x;

  return (
    <header>
      <h1>The Fake Blog</h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header;
