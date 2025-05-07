import { useState, useEffect } from 'react'

export default function ThankYouCard({ rating }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image()
        img.src = '/src/assets/images/illustration-thank-you.svg'
        img.onload = () => setIsLoading(false)
    }, [])

    return (
        <section className="flex flex-col items-center justify-center gap-6 text-center py-2">
            {isLoading ? (
                <div className="w-[162px] h-[108px] bg-grey-light rounded-md animate-pulse my-1 sm:my-4"></div>
            ) : (
                <img
                    src="/src/assets/images/illustration-thank-you.svg"
                    alt=""
                    className="my-1 sm:my-4"
                />
            )}
            <div className="bg-grey-light py-2 px-4 rounded-full ">
                <p className="text-primary-500 font-bold ">You selected {rating} out of 5</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-white text-[clamp(1.5rem,5vw,1.875rem)] font-bold leading-[1.2] mt-4">Thank you!</h2>
                <p className="text-grey-500 mt-2 text-[clamp(0.9375rem,1.25vw,1.0625rem)]">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
            </div>
        </section>
    );
}