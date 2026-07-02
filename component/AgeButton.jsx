export default function AgeButton({ onIncrease, onDecrease, onReset, isDisabledDecrease }) {
    return (
        <div>
            <button onClick={onIncrease}>
                Increase
            </button>
            <button onClick={onDecrease} disabled={isDisabledDecrease}>
                Decrease
            </button>
            <button onClick={onReset}>
                Reset
            </button>
        </div>
    );
}