import { StyleSheet, Text, View } from "react-native";

interface ListProps {
	data: Array<string>
}

function List({ data }: ListProps) {
	return (
		<View style={styles.listContainer}>
			{data.map((item: string) => <Text key={item} style={styles.listItem}>{item}</Text>)}
		</View>
	)
}

const styles = StyleSheet.create({
	listContainer: {
		marginHorizontal: 16
	},
	listItem: {
		backgroundColor: '#cccccc',
		padding: 4,
		marginVertical: 2,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#999999ff',
		textAlign: 'center'
	}
});

export default List;