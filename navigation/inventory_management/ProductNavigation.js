import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductScreen, CategoryProductScreen, EditProductScreen } from '../../screens'
import { COLORS } from '../../contains';
import IconHeader from '../../components/iconHeader';


const ProductStack = createStackNavigator();

const ProductStackScreen = () => {
  return (
    <ProductStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.white
            },
            headerTintColor : COLORS.second
        }}
    >
      <ProductStack.Screen name="ProductScreen" component={ProductScreen} options={{
                                                                          title : 'Product Management', headerLeft : () => (
                                                                              <IconHeader />
                                                                          )
                                                                          }}/>
      <ProductStack.Screen name="CategoryProductScreen" component={CategoryProductScreen} options={{title : 'Product Information'}}/>
      <ProductStack.Screen name="EditProductScreen" component={EditProductScreen} options={{title : 'Edit Product'}}/>
    </ProductStack.Navigator>
  );
}

export default ProductStackScreen