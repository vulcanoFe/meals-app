import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryGridTileProps {
	title: string;
	color: string;
	onPress: () => void
}

function CategoryGridTile({ title, color, onPress }: CategoryGridTileProps) {

	return (
		<View style={style.gridItem}>
			<Pressable style={({ pressed }) => [style.button, pressed ? style.buttonPressed : null]} onPress={onPress} >
				<View style={[style.innerContainer, { backgroundColor: color }]}>
					<Text style={style.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	)
}

const style = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
	},
	button: {
		flex: 1
	},
	buttonPressed: {
		opacity: 0.5
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18
	}
});

export default CategoryGridTile;