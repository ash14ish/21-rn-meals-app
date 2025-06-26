import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params?.categoryId;

  const displayedMeals = MEALS?.filter((meal) =>
    meal?.categoryIds?.some((item) => item === catId)
  );

  const categoryTitle = CATEGORIES?.find((cat) => cat?.id === catId)?.title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
