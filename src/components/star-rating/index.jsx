import { FaStar } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

const StarRating = ({ numOfStars = 5 }) => {
    const [activeStars, setActiveStars] = useState(0);
    const [stars, setStars] = useState(
        [...Array(numOfStars)].map(() => {
            return {
                class: "inactive",
            };
        })
    );

    const handleMouseEnter = (currentIndex) => {
        const starsCopy = [...stars].map((star, index) => {
            if (index === currentIndex) {
                return {
                    class: "active",
                };
            } else {
                return star;
            }
        });

        setStars(starsCopy);
    };

    const handleMouseLeave = () => {
        const starsCopy = [...stars].map(() => {
            return {
                class: "inactive",
            };
        });

        setStars(starsCopy);
    };

    const handleMouseClick = (rating) => {
        setActiveStars(rating);
    };

    return (
        <div className="container">
            {stars.map((star, index) => {
                return (
                    <FaStar
                        style={
                            index < activeStars && {
                                color: "blue",
                            }
                        }
                        className={`${star.class}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        onClick={() => handleMouseClick(index + 1)}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
