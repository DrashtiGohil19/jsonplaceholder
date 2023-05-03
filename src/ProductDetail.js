function ProductDetails(props) {
    const {name, color} = props.product;
    
      return (
        <div>
          <div>
            <h1>{name}</h1>
            <h1>{color}</h1>
          </div>
        </div>
      );
    }
    export default  ProductDetails;