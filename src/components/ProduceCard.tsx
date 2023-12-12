import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
//import FastImage from 'react-native-fast-image';

const ProduceCard = ({ title, price, onPress, image }) => {
  return (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={onPress}>
        {/* Utilisation de FastImage pour afficher l'image */}
        <Image source={{ uri: image }} style={styles.productImage} />
        <Image source={require('../../medias/icon/blue_add.png')} style={styles.priceIcon} />
        <View style={styles.productFooter}>
        <Text style={styles.productPrice}>{price} $</Text>
          <Text numberOfLines={2} style={styles.productTitle}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    margin: 8,
    padding: 24,
    width: 167,
    height: 194,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#E7ECF0',
  },
  productImage: {
    width: 68,
    height: 68,
    alignSelf: 'center',
  },
  productTitle: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  productFooter: {
    top: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 8,
  },
  priceIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    right: 12,
    top: 68,
  },
  productPrice: {
    fontSize: 16,
    color: '#2A4BA0',
  },
});

export default ProduceCard;
