import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface MealsOverviewProps {
	categoryId: string;
}

// Definisce i parametri per ogni schermata nella tua app
export type RootStackParamList = {
	MealsCategories: undefined;
	MealsOverview: MealsOverviewProps;
};

// Tipo per la prop navigation di CategoriesScreen
export type CategoriesScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'MealsCategories'
>;

// Tipo per la prop route di CategoriesScreen
export type CategoriesScreenRouteProp = RouteProp<
	RootStackParamList,
	'MealsCategories'
>;

// Tipo per la prop navigation di MealsOverviewScreen
export type MealsOverviewScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'MealsOverview'
>;

// Tipo per la prop route di MealsOverviewScreen
export type MealsOverviewScreenRouteProp = RouteProp<
	RootStackParamList,
	'MealsOverview'
>;
