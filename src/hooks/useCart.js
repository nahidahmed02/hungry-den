import { useEffect, useState } from "react";

const useCart = () => {
    const [selectedFoods, setSelectedFoods] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedSelectedFoods = JSON.parse(localStorage?.getItem('selectedFood'))
            if (storedSelectedFoods) {
                setSelectedFoods(storedSelectedFoods);
            }
        }
    }, []);

    const handleRemoveFromCart = (id) => {
        if (typeof window !== 'undefined') {
            const updatedSelectedFoods = selectedFoods.filter((item) => item._id !== id);
            setSelectedFoods(updatedSelectedFoods);
            localStorage.setItem('selectedFood', JSON.stringify(updatedSelectedFoods));
        }
    };

    const sumOfAllPrice =
        selectedFoods?.reduce((sum, food) => sum + parseFloat(food.total), 0).toFixed(2);

    const deliveryCharge = '12';

    const includingDeliveryChrg = (parseFloat(sumOfAllPrice) + parseFloat(deliveryCharge)).toFixed(2);

    return {
        selectedFoods,
        setSelectedFoods,
        handleRemoveFromCart,
        sumOfAllPrice,
        includingDeliveryChrg
    };
};

export default useCart;