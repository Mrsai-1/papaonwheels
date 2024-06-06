function ProductList({title,price,src}){

    return(
        <div className="card">
            <img src={src} alt=''/>
<p>{title}</p>
<p>${price}</p>
</div>
    )
        
    
}

export default ProductList;