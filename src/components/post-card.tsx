import type { Post } from "../store/posts/postsSlice";

export const PostCard = ({ post }: { post: Post }) => (
    <div className="border border-slate-300 rounded p-4 shadow hover:shadow-lg transition">
        <h3 className="font-semibold mb-2 text-slate-700">{post.title}</h3>
        <p className="text-sm text-gray-600">
            {post.body.length > 100
                ? post.body.slice(0, 100) + "..."
                : post.body}
        </p>
    </div>
);
