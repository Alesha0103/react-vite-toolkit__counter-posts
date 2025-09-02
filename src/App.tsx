import { useMemo } from "react";
import { cn } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { decrement, increment } from "./store/counter/counterSlice";

function App() {
    const dispatch = useDispatch();
    const { count } = useSelector((state: RootState) => state.counter);

    const renderIncrement = useMemo(() => {
        return (
            <button
                className="text-base font-medium cursor-pointer border-2 border-slate-300 rounded p-4"
                onClick={() => dispatch(increment())}
            >
                increment
            </button>
        );
    }, [count]);

    const renderDecrement = useMemo(() => {
        return (
            <button
                className={cn(
                    "text-base font-medium cursor-pointer border-2 border-slate-300 rounded p-4",
                    count === 0 && "cursor-default text-slate-300"
                )}
                onClick={() => dispatch(decrement())}
            >
                decrement
            </button>
        );
    }, [count]);

    return (
        <section className="container py-10">
            <h1 className="text-red-500 text-3xl font-bold text-center">
                Vite + React
            </h1>
            <div className="w-1/3 mx-auto flex justify-between items-center gap-x-4 mt-10">
                {renderIncrement}
                {renderDecrement}
                <span className="text-blue-600 text-2xl text-bold">
                    {count}
                </span>
            </div>
        </section>
    );
}

export default App;
