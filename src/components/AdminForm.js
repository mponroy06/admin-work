import React from 'react';
import { useState } from 'react';
import '../css/adminForm.css';

function AdminForm(props){
    const [formDatas, setFormDatas] = useState({
        id: '',
        groupe : '',
        producteurName : '',
        title : '',
        subTitle : '',
        prix : '',
        unit : '',
        resume : '',
        description : ''
    })

    const handleChange = (e) => {
        const newdatas = {...formDatas, [e.target.name] : e.target.value };
        setFormDatas(newdatas);
    }

    const renderBtnTypeForm = (type) => {
        if( type == 'add'){
            return(
                <button className="btn" onClick={() => props.addNewProduct(formDatas)}>Ajouter</button>
            )
        }else if( type == 'modif'){
            return(
                <button className="btn" onClick={() => props.sendModifiedProductDatas()}>Modifier</button>
            )
        }
    } 

    const getProductToModified = () => {

    }
    
    return(
        <div className="AdminForm">
            <h2>{props.type == 'add' ? 'Ajouter' : 'Modifier' + props.productId }</h2>
                <div className="field dbl">
                    <select name="groupe" id="groupe" onChange={handleChange} value={formDatas.groupe}>
                        <option>Catégorie parente</option>
                        <option>Jean'tiche</option>
                    </select>
                    <select name="producteurName" id="producteurName" onChange={handleChange} value={formDatas.producteurName}>
                        <option>Producteur</option>
                        <option>Prout</option>
                    </select>
                </div>
                <div className="field dbl">
                    <input placeholder="id" type="text" name="id" id="id" onChange={handleChange} value={formDatas.id} />
                    <input placeholder="Titre" type="text" name="title" id="title" onChange={handleChange} value={formDatas.title} />
                </div>
                <div className="field">
                    <input placeholder="Sous titre" type="text" name="subTitle" id="subTitle" onChange={handleChange} value={formDatas.subTitle} />
                </div>
                <div className="field dbl">
                    <input placeholder="Prix" type="text" name="prix" id="prix" onChange={handleChange} value={formDatas.prix} />
                    <select name="unit" id="unit" onChange={handleChange} value={formDatas.unit}>
                        <option>Kg</option>
                        <option>Ltr</option>
                    </select>
                </div>
                <div className="field">
                    <input placeholder="Description courte" type="text" name="resume" id="resume" onChange={handleChange} value={formDatas.resume} />
                </div>
                <div className="field">
                    <textarea placeholder="Description" type="text" name="description" id="description" onChange={handleChange} value={formDatas.description}></textarea>
                </div>
                {renderBtnTypeForm(props.type)}
        </div>
    )
}

export default AdminForm;