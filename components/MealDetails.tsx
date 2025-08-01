import { StyleSheet, Text, View } from "react-native";

interface MealDetailsProps {
	duration: number;
	complexity: string;
	affordability: string
}

function MealDetails({ duration, complexity, affordability }: MealDetailsProps) {
	return (
		<View style={styles.details}>
			<Text style={styles.detailItem}>{duration}m</Text>
			<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
			<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
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
	}
});

export default MealDetails;