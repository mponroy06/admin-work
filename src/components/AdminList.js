import { useEffect, useState } from 'react';
import '../css/adminList.css';
import AdminListLi from './AdminListLi';

function AdminList(props){

    const list = props.productList;

    return(
        <div className="AdminList">
            <div className="filter">
                <h2>Filtrer par </h2>
                <div className="rowFilter">
                    <form>
                        <select name="categ">
                            <option>Toutes les catégoprires</option>
                            <option>tomates</option>
                            <option>patates</option>
                        </select>
                        <select name="producteurs">
                            <option>Tous les producteurs</option>
                            <option>jean-michel</option>
                            <option>patrick</option>
                        </select>
                        <input className="btn" type="submit" value="ok" />
                    </form>
                    <div className="btn add" onClick={props.addMode}>+</div>
                </div>
            </div>
            <ul className="list">
                {
                   list.map((product, index) => {
                        return(
                            <AdminListLi 
                                title={product.title} 
                                id={product.id}
                                producteurName={product.producteurName} 
                                key={index}
                                modifiedProduct={props.modifiedProduct}
                            />
                        )
                    })
                }
            </ul> 
        </div>
    )
}
export default AdminList;