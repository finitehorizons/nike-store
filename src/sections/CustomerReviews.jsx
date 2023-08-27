import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center font-bold text-4xl">
                What Our
                <span className="text-coral-red"> Customers </span>
                Say?
            </h3>
            <p className="info-text m-auto mt-4 text-center max-w-lg">
                Here are some stores from our satisfied customers
            </p>
            <div className="mt-24 flex flex-1 justify-evenly items-center textcenter max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.customerName}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
