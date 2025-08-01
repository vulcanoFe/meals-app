import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Meal from "../models/meal";
import { RootStackParamList } from "../types/navigation";

interface MealItemProps {
	meal: Meal
}

function MealItem({ meal }: MealItemProps) {

	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'MealDetail'>>();

	function onPressHandler() {
		navigation.navigate("MealDetail", { meal });
	}

	return (
		<View style={styles.mealItem}>
			<Pressable style={({ pressed }) => pressed ? styles.buttonPressed : null} onPress={onPressHandler}>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: meal.imageUrl }} style={styles.image} />
						<Text style={styles.title}>{meal.title}</Text>
					</View>
					<View style={styles.details}>
						<Text style={styles.detailItem}>{meal.duration}</Text>
						<Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
						<Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOpacity: 0.35,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: 200
	},
	title: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
		margin: 8
	},
	details: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		margin: 8
	},
	detailItem: {
		fontSize: 12,
		fontWeight: '300'
	},
	buttonPressed: {
		opacity: 0.5
	},
})

export default MealItem;