import { FaRegStar, FaStar } from "react-icons/fa";

// ratings fo single media 
const MediaRatings = ({ mediaDetail }) => {
	
	// Array to store star elements
	const rating = Math.round(mediaDetail?.mediaData?.rating)
	const stars = [];

	// Loop to generate stars based on the rating
	for (let i = 0; i < 5; i++) {
		stars.push(
			<span
				key={i}
				className="text-white text-BodyS md:text-BodyM lg:text-HeadingXS">
				{i < rating ? <FaStar /> : <FaRegStar />}
			</span>
		);
	}

	// Render the stars in a flex container
	// return <div className="flex">{stars}</div>;

	return (
		<div className="flex items-center gap-4">
			<p className="text-BodyM md:text-HeadingXS lg:text-HeadingL">
				{mediaDetail?.mediaData?.rating.toFixed(1)}
			</p>
			<div className="flex">{stars}</div>
		</div>
	)
};

export default MediaRatings;
