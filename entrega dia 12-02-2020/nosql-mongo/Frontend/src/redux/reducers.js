import {combineReducers} from 'redux';
import produtos from  './produtosReducer';
import cart from './carrinhoReducer';

export default combineReducers({
    produtos,
    cart,
});