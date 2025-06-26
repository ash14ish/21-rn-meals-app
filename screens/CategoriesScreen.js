import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { APP_SCREENS } from "../utils/constants";

const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate(APP_SCREENS?.MEALS_OVERVIEW_SCREEN, {
        categoryId: item.id,
      });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
