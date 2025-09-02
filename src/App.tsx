import { Counter } from "./components/counter";
import { Posts } from "./components/posts";

export const App = () => {
    return (
        <section className="container py-10">
            <h1 className="text-red-500 text-3xl font-bold text-center">
                Vite + React
            </h1>
            <Counter />
            <Posts />
        </section>
    );
};
