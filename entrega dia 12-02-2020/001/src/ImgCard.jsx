import React from 'react';
import {useSelector} from 'react-redux';

export default function ImgCard() {
   
    // const dispatch = useDispatch();
    const produtos = useSelector((state) => state.produtos);

    return (
        <div>
        {produtos.map(item => (

        <img key={item.id} src={item.img} alt="{item.nome}" />
        
        ))}
        </div>
    );
}
