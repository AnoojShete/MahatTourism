// screens/HomeScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import{ StyleSheet } from 'react-native'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome to MahaTourism</Text>
      </View>
      
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="hotel" size={40} color="#2196F3" />
          <Text style={styles.cardTitle}>Hotels</Text>
          <Text style={styles.cardDescription}>Find the best hotels</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="flight" size={40} color="#2196F3" />
          <Text style={styles.cardTitle}>Flights</Text>
          <Text style={styles.cardDescription}>Book your tickets</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="place" size={40} color="#2196F3" />
          <Text style={styles.cardTitle}>Places</Text>
          <Text style={styles.cardDescription}>Explore destinations</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}