import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from "react-native";

interface IconButtonProps {
	icon: any,
	color: string,
	isFavourite: boolean
	onPressAction: () => void
}

function IconButton({ icon, color, isFavourite, onPressAction }: IconButtonProps) {

	return (
		<Pressable onPress={onPressAction} style={({ pressed }) => pressed && styles.pressed}>
			<Ionicons name={icon} size={36} color={isFavourite ? 'yellow' : color} />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7
	}
});

export default IconButton;