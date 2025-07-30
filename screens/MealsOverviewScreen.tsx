import { StyleSheet, Text, View } from "react-native";
import { MealsOverviewScreenNavigationProp, MealsOverviewScreenRouteProp } from "../types/navigation";

interface MealsOverviewScreenProps {
	navigation: MealsOverviewScreenNavigationProp;
	route: MealsOverviewScreenRouteProp;
}

function MealsOverviewScreen({ navigation, route }: MealsOverviewScreenProps) {

	// Recupera il parametro categoryId dalla route
	const categoryId = route.params.categoryId;

	return (
		<View style={styles.container}>
			<Text>Meals Overview Screen</Text>
			<Text>Category ID: {categoryId}</Text>
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