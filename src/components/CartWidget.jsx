import cart from "../assets/cart.svg"

const styles = {
    img: {
        height: "30px",
        width: "30px",
    },
    span: {
        color: "black",
        paddingLeft: 8,
    }
}

export const CartWidget = () =>( 
    <> 
     <img style={styles.img} src={cart} alt="changuito"/>
      <span style={styles.span}>0</span>
     </>
    )

// con el comando rfc se crea un componente directamente

