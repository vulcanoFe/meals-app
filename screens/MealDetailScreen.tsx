import { RouteProp, useRoute } from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/SubTitle";
import { RootStackParamList } from "../types/navigation";

function MealDetailScreen() {

	const route = useRoute<RouteProp<RootStackParamList, 'MealDetail'>>();
	const meal = route.params.meal;

	return (
		<ScrollView style={styles.container}>
			<View style={styles.innerContainer}>
				<View>
					<Image source={{ uri: meal.imageUrl }} style={styles.image} />
				</View>
				<View style={styles.dataContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>{meal.title}</Text>
						<MealDetails duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} />
					</View>
					<SubTitle text="Ingredients" />
					<List data={meal.ingredients} />
					<SubTitle text="Steps" />
					<List data={meal.steps} />
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		marginBottom: 32
	},
	innerContainer: {
		width: '100%',
		overflow: 'hidden'
	},
	dataContainer: {
	},
	image: {
		width: '100%',
		height: 300
	},
	titleContainer: {
		borderBottomWidth: 2,
		borderBottomColor: '#ccc'
	},
	title: {
		margin: 8,
		fontSize: 22,
		fontWeight: '800',
		textAlign: 'center'
	}
});

export default MealDetailScreen;
