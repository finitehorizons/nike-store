import { star } from "../assets/icons";

const PopularProductCard = ({ imgUrl, name, price, rating }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={imgUrl} alt={name} className="w-[282px] h-[282px]" />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating icon" width={24} height={24} />
                <p className="font-montserrat leading-normal text-xl text-slate-gray">
                    {rating}
                </p>
            </div>
            <h3 className="mt-2 font-semibold font-palanquin leading-normal text-2xl">
                {name}
            </h3>
            <p className="mt-2 font-semibold font-montserrat leading-normal text-2xl text-coral-red">{price}</p>
        </div>
    );
};

export default PopularProductCard;
