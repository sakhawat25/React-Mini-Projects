import Item from "./Item";
import data from "./data.json";
import { useState } from "react";
import "./style.css";

const Accordian = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleShow = (id) => {
        if (activeItem === id) {
            setActiveItem(null);
        } else {
            setActiveItem(id);
        }

        // console.log(activeItem);
    };

    return (
        <div className="container">
            <div className="items">
                {data.map((item) => {
                    return (
                        <Item
                            item={item}
                            key={item.id}
                            activeItem={activeItem}
                            handleShow={handleShow}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Accordian;
