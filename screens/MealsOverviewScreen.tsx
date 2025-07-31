import { useLayoutEffect } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Category from "../models/category";
import Meal from "../models/meal";
import { MealsOverviewScreenNavigationProp, MealsOverviewScreenRouteProp } from "../types/navigation";

interface MealsOverviewScreenProps {
	navigation: MealsOverviewScreenNavigationProp;
	route: MealsOverviewScreenRouteProp;
}

function MealsOverviewScreen({ navigation, route }: MealsOverviewScreenProps) {

	// Recupera il parametro categoryId dalla route
	const categoryId = route.params.categoryId;

	useLayoutEffect(() => {
		let title = "Meals Overview";
		const category = CATEGORIES.find((cat: Category) => cat.id === categoryId);
		title = category ? category.title : title;
		navigation.setOptions({ title: category?.title });
	}, [categoryId, navigation]);


	const displayedMeals = MEALS.filter((mealItem: Meal) => {
		return mealItem.categoryIds.indexOf(categoryId) >= 0;
	});

	function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
		return (<MealItem meal={itemData.item} />)
	}

	return (
		<View style={styles.container}>
			<FlatList data={displayedMeals} keyExtractor={(item: Meal) => item.id} renderItem={renderMealItem} />
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	}
})

export default MealsOverviewScreen;