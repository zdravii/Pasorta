import { createStore } from 'vuex';
import dogs from './dogs';
import customers from './customers'


export default createStore ({
   modules:{
    dogs,customers
   }
});