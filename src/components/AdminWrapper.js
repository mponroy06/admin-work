import '../css/adminWrapper.css';

import AdminList from './AdminList';
import AdminForm from './AdminForm';

import { useState } from 'react';

function AdminWrapper(){


    const [type, setType] = useState('add');
    const [productId, setProductId] = useState('');
    const [products, setProducts] = useState(
        [
            {
                'id' : 1234,
                'groupe' : 'tomates',
                'producteurName' : 'jean-philippe',
                'title' : 'tomate noire',
                'subTitle' : 'Origine Russe',
                'prix' : 67,
                'unit' : 'kg',
                'resume' : 'description courte',
                'description' : 'description longue'
            },
        ]
    );

    const addNewProduct = (newProduct) => {
        let productList = [...products, newProduct];
        setProducts(productList);
        console.log(products);
    }
    const modifiedProduct = (id) => {
        setType('modif');
        setProductId(id);
    }
    const addMode = () => {
        setType('add');
    }
    const sendModifiedProductDatas = () => {

    }

    return(
        <section className='AdminWrapper'>
            <AdminList 
                productList={products} 
                modifiedProduct={modifiedProduct} 
                addMode={addMode}
            />
            <AdminForm 
                addNewProduct={addNewProduct} 
                type={type}
                productId={productId}
                sendModifiedProductDatas={sendModifiedProductDatas} 
            />
        </section>
    )
}

export default AdminWrapper;

