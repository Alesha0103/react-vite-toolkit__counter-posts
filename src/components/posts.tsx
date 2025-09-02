import { fetchPosts } from "../store/posts/posts-api";
import { useAppDispatch, useAppSelector } from "../hooks/use-store";
import { Loader } from "./loader";
import { hidePosts } from "../store/posts/postsSlice";
import { PostCard } from "./post-card";

export const Posts = () => {
    const dispatch = useAppDispatch();
    const { posts, isHidden, loading } = useAppSelector((state) => state.posts);

    const handlePosts = () => {
        if (!posts) return dispatch(fetchPosts());
        dispatch(hidePosts(!isHidden));
    };

    const buttonText = !posts
        ? "Get Posts"
        : isHidden
          ? "Show Posts"
          : "Hide Posts";

    return (
        <div className="mt-10 px-4">
            <button
                className="block mx-auto text-base font-medium cursor-pointer border-2 border-slate-300 rounded p-4 mb-6 disabled:opacity-50"
                onClick={handlePosts}
                disabled={loading}
            >
                {buttonText}
            </button>

            {!isHidden && (
                <>
                    {loading && <Loader />}
                    {posts?.length === 0 && !loading && (
                        <p className="text-center mt-10">
                            There are no any posts
                        </p>
                    )}
                    {posts?.length && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                            {posts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
