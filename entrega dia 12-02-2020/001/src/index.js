import React from 'react';
import ReactDOM from 'react-dom';
import Carrinho from './CarrinhoLoja';
import Produtos from './Produtos';
import store from  './redux/store';
import {Provider} from 'react-redux'



console.log(store.getState())

ReactDOM.render(


    <Provider store={store}>

    <div style={{display: 'flex'}}>
      <Produtos />
      <Carrinho />
    </div>


    </Provider>



  ,document.getElementById('root'));
