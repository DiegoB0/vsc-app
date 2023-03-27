import React, { useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

const orders = [
	{
		id: 1,
		orderNumber: '#00001',
		meals: [
			{ name: 'Burger', quantity: 2 },
			{ name: 'Fries', quantity: 1 },
			{ name: 'Drink', quantity: 1 },
		],
		price: 15.99,
		paymentType: 'Credit Card',
	},
	{
		id: 2,
		orderNumber: '#00002',
		meals: [
			{ name: 'Pizza', quantity: 1 },
			{ name: 'Salad', quantity: 1 },
			{ name: 'Drink', quantity: 1 },
		],
		price: 19.99,
		paymentType: 'Cash',
	},
	{
		id: 3,
		orderNumber: '#00003',
		meals: [
			{ name: 'Taco', quantity: 3 },
			{ name: 'Rice', quantity: 1 },
			{ name: 'Beans', quantity: 1 },
		],
		price: 10.99,
		paymentType: 'Debit Card',
	},
];

const ProductsList = () => {
	const [hiddenOrders, setHiddenOrders] = useState([]);

	const handleHideOrder = (orderId) => {
		setHiddenOrders([...hiddenOrders, orderId]);
	};

	const isOrderHidden = (orderId) => {
		return hiddenOrders.includes(orderId);
	};

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			showsVerticalScrollIndicator={false}
		>
			{orders.map((order) => (
				<View
					key={order.id}
					style={[styles.card, isOrderHidden(order.id) && styles.hiddenCard]}
				>
					<Text style={styles.orderNumber}>{order.orderNumber}</Text>
					<View style={styles.mealsContainer}>
						{order.meals.map((meal, index) => (
							<Text key={index} style={styles.meal}>
								{meal.name}: {meal.quantity}
							</Text>
						))}
					</View>
					<Text style={styles.paymentType}>{order.paymentType}</Text>
					<Text style={styles.price}>${order.price.toFixed(2)}</Text>

					<TouchableOpacity
						style={styles.button}
						onPress={() => handleHideOrder(order.id)}
					>
						<Text style={styles.buttonText}>Listo</Text>
					</TouchableOpacity>
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 3,
	},
	orderNumber: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 5,
	},
	mealsContainer: {
		flexDirection: 'column',
		marginLeft: 10,
		marginBottom: 5,
	},
	meal: {
		fontSize: 14,
		marginBottom: 2,
	},
	quantity: {
		fontSize: 14,
		marginBottom: 2,
		color: '#888',
	},
	price: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 10,
		marginBottom: 5,
	},
	paymentType: {
		fontSize: 14,
		color: '#888',
		textAlign: 'right',
		marginRight: 10,
		marginBottom: 5,
	},
	button: {
		backgroundColor: '#ffa100',
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginTop: 10,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export default ProductsList;
