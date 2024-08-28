import { useEffect, useState } from "react";

export function Book(props){
    const [body, setBody] = useState("");

    useEffect(() => {
        fetch("https://online-library-backend-gilt.vercel.app/"+props.link)
            .then(async (res) => {
                const json = await res.json();
                const books = json.books;

                const bodyContent = books.map((book, index) => (
                    <div key={index} style={{height:"300px",width:"300px", margin: "10px", padding: "10px", border: "1px solid #ddd", borderRadius: "16px", backgroundColor: "white", color: "#000" }}>
                        <img style={{ height: "160px", width: "120px",marginLeft:"87px",marginTop:"10px",marginBottom:"8px" }} src={book.image} alt={`Book ${index}`} /><br />
                        <span style={{fontWeight:"900",marginLeft:"12px",fontFamily:"monospace",fontSize:"15px"}}>{book.title}</span><br />
                        <span style={{fontWeight:"600",fontFamily:"monospace",fontSize:"14px"}}>by {book.authors.join(', ')}</span><br />
                        <button style={{ marginTop: "10px", padding: "5px 10px", backgroundColor: "#000080", color: "white", border: "none", borderRadius: "4px",marginLeft:"120px"}}>
                            <a href={book.pdf} style={{ color: "white", textDecoration: "none" }}>READ</a>
                        </button>
                    </div>
                ));
                setBody(bodyContent);
            })
            .catch((error) => console.error("Error fetching physics books:", error));
    }, []);

    return (
        <div style={{  color: "white", padding: "20px" }}>
            <h2 style={{textAlign:"center",color:"white",textTransform:"uppercase",fontFamily:"monospace",fontWeight:"900",maxHeight:"50px",fontSize:"35px"}}>{props.subject} Books</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {body}
            </div>
        </div>
    );
}