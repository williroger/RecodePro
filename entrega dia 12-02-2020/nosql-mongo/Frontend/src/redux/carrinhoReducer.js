import listaProdutos from './listaProdutos';

const initialState = listaProdutos.map(item => ({...item, qty:0}));

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    // eslint-disable-next-line
    switch(action.type){
        case "ADD_CARRINHO":
            // console.log(`cliquei no id ${action.id}`)
            return state.map(item => {
                item.id === action.id && item.qty++;

                return item;
            });

        case "REMOVE_CARRINHO":
            return state.map(item => {
                item.id === action.id && item.qty--;

                return item;
            });

        case "CLEAR_CARRINHO":
            return state.map(item => {
                item.qty = 0;

                return item;
            });    
// eslint-disable-next-line
        default:
                return state;    



    }
};