"use client";
import Star from "../_icons/Star";

function Moviecard({ title, rating, image }) {
  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500${image}`
    : "/placeholder.jpg";

  return (
    <div className="w-[229.73px] h-[439px] rotate-0 opacity-100 gap-[4px] rounded-lg bg-[#F4F4F5]">
      <div className="w-[229.73px] h-[340px] rotate-0 opacity-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="w-[229.73px] h-[95px] rotate-0 opacity-100 p-2">
        <div className="w-[213.73px] h-[23px] gap-[4px] rotate-0 opacity-100 flex">
          <div className="items-center justify-center flex flex-row">
            <Star />
            <div className="w-[193.73px] h-[23px] rotate-0 opacity-100 flex items-center">
              <div className="font-inter font-normal text-[12px] leading-[16px] tracking-normal">
                {rating !== undefined && rating !== null
                  ? rating.toFixed(1)
                  : "N/A"}
                /10
              </div>
            </div>
          </div>
        </div>
        <div className="w-[213.73px] h-[56px] gap-[10px] rotate-0 opacity-100 flex">
          <p className="font-inter font-normal text-[18px] leading-[28px] tracking-normal">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Moviecard;
