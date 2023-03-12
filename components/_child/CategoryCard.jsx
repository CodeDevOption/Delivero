import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity } from "react-native";

const CategoryCard = ({ id, imgUrl, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
