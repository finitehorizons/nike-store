import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={imgURL}
                alt="customer"
                className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <p className="max-w-sm text-center info-text mt-6">{feedback}</p>
            <div className="flex items-center justify-center mt-3 gap-2.5">
                <img
                    src={star}
                    alt="star icon"
                    width={24}
                    height={24}
                    className="object-contain m-0"
                />
                <p className="mt-3 font-montserrat text-slate-gray">
                    ({rating})
                </p>
            </div>
            <h3 className="mt-1 font-palanquin text-2xl text-center font-bold">
                {customerName}
            </h3>
        </div>
    );
};

export default ReviewCard;
