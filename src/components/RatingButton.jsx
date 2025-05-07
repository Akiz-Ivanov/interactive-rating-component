export default function RatingButton({ children, handleRatingClick, rating }) {

    const isRatingActive = children === rating;
    const style = isRatingActive ? 'bg-white text-grey-950' : 'bg-grey-light text-grey-500';
    const hoverStyle = isRatingActive ? '' : 'hover:bg-primary-500 hover:text-grey-950';

    return (
        <button
            onClick={() => handleRatingClick(children)}
            className={`w-[clamp(3rem,6vw,3.5rem)] h-[clamp(3rem,6vw,3.5rem)] 
             rounded-full font-bold flex justify-center items-center transition-colors duration-200 ease-productive aspect-square
             cursor-pointer ${style} ${hoverStyle}`}
            aria-pressed={isRatingActive}
            aria-label={`Rate ${children} out of 5`}
        >
            <span className="text-[clamp(1rem,2vw,1.25rem)]">
                {children}
            </span>
        </button>
    );
}