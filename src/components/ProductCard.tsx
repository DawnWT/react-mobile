import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
//import FastImage from 'react-native-fast-image';



const ProductCard = ({ title, price, onPress, image }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.productCard}>
        <Image source={{ uri: image }} width={20} height={20} style={styles.productImage} />
        <View style={styles.productFooter}>
          <Text style={styles.productPrice}>{price}$</Text>
          <Text style={styles.productTitle}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCard: {
    margin: 4,
    padding: 16,
    width: 180,
    height: "auto",
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#E7ECF0',
    
  },

  productImage: {
    //afficher l'image complète sans bg avec un radius 
    width: "100%",
    height: 120,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    //contour de l'image
    borderWidth: 1,
    borderColor: '#E0E0E0',

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

export default ProductCard;
