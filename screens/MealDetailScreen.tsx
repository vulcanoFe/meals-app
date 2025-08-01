import { RouteProp, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation";

function MealDetailScreen() {

	const route = useRoute<RouteProp<RootStackParamList, 'MealDetail'>>();
	const meal = route.params.meal;

	return (
		<View>
			<Text>Meal detail - {meal.title}</Text>
		</View>
	)
}

export default MealDetailScreen;