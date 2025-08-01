import { StyleSheet, Text, View } from "react-native";

interface SubTitleProps {
	text: string
}

function SubTitle({ text }: SubTitleProps) {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>{text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	subTitleContainer: {
		padding: 4,
		marginHorizontal: 24,
		marginVertical: 4,
		borderBottomWidth: 2,
		borderBottomColor: '#ccc'
	},
	subTitle: {
		fontSize: 18,
		fontWeight: '600',
		textAlign: 'center'
	}
});

export default SubTitle;