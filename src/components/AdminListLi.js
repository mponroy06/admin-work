function AdminListLi(props){
    return(
        <li>
            <div className="infosLeft">
                <span className="title">{props.title} {props.id}</span>
                <span className="producteursName">{props.producteurName}</span>
            </div>
            <div className="rightAction">
                <span className="iconBtn" onClick={() => props.modifiedProduct(props.id)}><i className="fas fa-pencil-alt"></i></span>
                <span className="iconBtn"><i className="fas fa-trash-alt"></i></span>
            </div>
        </li>
    )
}

export default AdminListLi;