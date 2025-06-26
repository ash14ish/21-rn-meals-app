import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealsList from "../components/MealList/MealsList";

const FavouritesScreen = () => {
  const favoriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const favoriteMeals = MEALS?.filter((meal) =>
    favoriteMealIds?.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
