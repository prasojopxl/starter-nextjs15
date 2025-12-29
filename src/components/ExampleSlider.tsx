'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";


function NextArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			onClick={onClick}
			onKeyDown={onClick}
			role="button"
			tabIndex={0}
			aria-label="Next slide"
			className="bg-[181C20]  hover:bg-c-black hover:opacity-100 opacity-50 border-c-dark hover:border-c-dark absolute top-[50%]  -translate-y-1/2  -right-10 z-10 mx-auto flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-[5px] border transition duration-300 hover:text-white"
		>
			<BiSolidRightArrow className="text-2xl" />
		</div>
	);
}

function PrevArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			onClick={onClick}
			onKeyDown={onClick}
			role="button"
			tabIndex={0}
			aria-label="Previous slide"
			className="bg-[181C20] hover:bg-c-black hover:opacity-100 opacity-50 border-c-dark hover:border-c-dark absolute top-[50%]  -translate-y-1/2  -left-10 z-10 mx-auto flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-[5px] border transition duration-300 hover:text-white"
		>
			<BiSolidLeftArrow className="text-2xl" />
		</div>
	);
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,    
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

export default function ExampleSlider() {
    return (
        <div className='w-full max-w-[1000px] mx-auto'>
<Slider {...settings}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
</Slider>          
          
        </div>
    )
}
