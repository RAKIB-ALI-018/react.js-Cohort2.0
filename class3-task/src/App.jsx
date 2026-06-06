import React from 'react'
import Cards from './Components/Cards'

const App = () => {
  const foodItems = [
    {
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
      name: "Sweet Berry Muffin",
      description: "Freshly baked muffin topped with juicy berries. Soft texture, natural sweetness, and a delightful fruity flavor in every bite.",
      rate: 2.45,
      stock: 40
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      name: "Grilled Chicken Bowl",
      description: "Tender grilled chicken served with seasoned vegetables and rice. A wholesome meal packed with protein and flavor.",
      rate: 8.99,
      stock: 32
    },
    {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      name: "Garden Fresh Salad",
      description: "A colorful mix of crisp greens, cherry tomatoes, cucumbers, and dressing. Light, refreshing, and nutrient-rich.",
      rate: 5.75,
      stock: 28
    },
    {
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      name: "Classic Cheese Pizza",
      description: "Stone-baked pizza topped with rich tomato sauce and melted cheese. Perfectly crispy and incredibly satisfying.",
      rate: 10.50,
      stock: 15
    },
    {
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      name: "Double Beef Burger",
      description: "Juicy beef patties layered with cheese, lettuce, and signature sauce. A hearty choice for burger lovers.",
      rate: 7.25,
      stock: 22
    },
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      name: "Spicy Veg Wrap",
      description: "Fresh vegetables wrapped in a soft tortilla with spicy seasoning. Flavorful, filling, and easy to enjoy on the go.",
      rate: 4.99,
      stock: 36
    }
  ];

  return (
    <div className='py-4 flex flex-col items-center gap-4'>
      {
        foodItems.map((elem, index) => {
          return (
            <Cards
              key={index}
              image={elem.image}
              name={elem.name}
              description={elem.description}
              rate={elem.rate}
              stock={elem.stock}
            />
          );
        })
      }
    </div>
  );
};

export default App;