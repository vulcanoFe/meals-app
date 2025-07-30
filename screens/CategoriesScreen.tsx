import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import { CategoriesScreenNavigationProp, CategoriesScreenRouteProp } from "../types/navigation";

interface RenderCategoryItemProps {
	item: Category;
}

interface CategoriesScreenProps {
	navigation: CategoriesScreenNavigationProp;
	route: CategoriesScreenRouteProp;
}

function CategoriesScreen({ navigation, route }: CategoriesScreenProps) {

	function renderCategoryItem(itemData: RenderCategoryItemProps) {

		function onPressHandler() {
			navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
		}

		return (
			<CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler} />
		);
	}

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2} />
	);
}

export default CategoriesScreen;