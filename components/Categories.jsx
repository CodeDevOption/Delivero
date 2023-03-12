import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import client, { urlFor } from "../client";
import { CategoryCard } from "./_child";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == 'category']
    `
      )
      .then((data) => {
        setCategory(data);
      });
  }, []);

  console.log(category);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* CategoriesCard */}
      {category.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image)}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
