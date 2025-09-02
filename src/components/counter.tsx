import { useMemo } from "react";
import { decrement, increment } from "../store/counter/counterSlice";
import { cn } from "../utils";
import { useAppDispatch, useAppSelector } from "../hooks/use-store";

export const Counter = () => {
    const dispatch = useAppDispatch();
    const { count } = useAppSelector((state) => state.counter);

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
        <div className="w-fit mx-auto flex justify-between items-center gap-x-4 mt-10">
            {renderIncrement}
            {renderDecrement}
            <span className="w-10 text-blue-600 text-2xl text-bold text-center">
                {count}
            </span>
        </div>
    );
};
