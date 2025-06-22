const Item = ({ item, activeItem, handleShow }) => {
    return (
        <div className="item">
            <div className="question">
                <h3>{item.question}</h3>
                <button onClick={() => handleShow(item.id)}>
                    <i
                        className={`fa-solid fa-circle-chevron-down ${
                            activeItem === item.id ? "rotate" : ""
                        }`}
                    ></i>
                </button>
            </div>
            <div className={`answer ${activeItem === item.id ? "show" : ""}`}>
                <p>{item.answer}</p>
            </div>
        </div>
    );
};

export default Item;
