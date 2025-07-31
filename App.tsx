import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<NavigationContainer>
				<Stack.Navigator screenOptions={defaultScreenOpt}>
					<Stack.Screen name='MealsCategories' component={CategoriesScreen} options={mealsCategoryScreenOpt} />
					<Stack.Screen
						name='MealsOverview'
						component={MealsOverviewScreen}
					//options={({ route, navigation }) => {
					//	const catId = route.params.categoryId;
					//	const title = CATEGORIES.filter((cat: Category) => cat.id === catId)[0].title;
					//	return { title }
					//}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const defaultScreenOpt: NativeStackNavigationOptions = {
	title: 'Meals Categories',
	headerStyle: { backgroundColor: '#5f3016ff' },
	headerTintColor: 'white',
	contentStyle: { backgroundColor: '#533e33ff' },
}

const mealsCategoryScreenOpt: NativeStackNavigationOptions = {
	title: 'Meals Categories',
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
