
import { Link } from "react-router-dom";

export function Books(props) {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{props.title}</h2>
            <div style={styles.bodyContainer}>
                {props.body}
            </div>
            <Link to={props.link} style={styles.link}>
                <button style={styles.button}>View More</button>
            </Link>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "grey",
        border: "2px solid white",
        marginTop: "50px",
        marginBottom: "50px",
        boxShadow: "9px 9px 20px white",
        padding: "20px",
    },
    title: {
        margin: "20px 0",
        color: "#505bdb",
        textAlign: "center",
    },
    bodyContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
    },
    link: {
        textDecoration: "none",
    },
    button: {
        display: "block",
        margin: "20px auto",
        width: "120px",
        height: "40px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
        backgroundColor: "#000080",
        color: "white",
        border: "none",
        textAlign: "center",
    },
    '@media (max-width: 768px)': {
        container: {
            margin: "30px 10px",
            padding: "15px",
        },
        title: {
            fontSize: "24px",
        },
        button: {
            width: "100px",
            height: "35px",
        },
    },
    '@media (max-width: 480px)': {
        container: {
            margin: "20px 5px",
            padding: "10px",
        },
        title: {
            fontSize: "20px",
        },
        button: {
            width: "90px",
            height: "30px",
        },
    }
};
