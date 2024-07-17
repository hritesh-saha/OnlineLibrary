import { useEffect, useState } from "react";
import { Books } from "./Books";

export function Test(props) {
    const [bookComponents, setBookComponents] = useState([]);
    const subjects = props.subjects;
    const links = props.links;

    useEffect(() => {
        async function fetchBooks() {
            const fetchedBookComponents = await Promise.all(subjects.map(async (subject, index) => {
                try {
                    const res = await fetch("https://online-library-backend-gilt.vercel.app/" + subject);
                    const json = await res.json();
                    const books = json.books;
                    const subjectname = books[0].subject;

                    const bodyContent = books.map((book, index) => (
                        <div key={index} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",flexDirection:"column" }}>
                            <img style={{ height: "240px", width: "200px", padding: "12px" }} src={book.image} alt={`Book ${index}`} />
                            {/*<p style={{fontSize:"18px"}}>{book.title}</p>*/}
                        </div>
                    ));

                    return (
                        <div key={subject} style={{ fontSize: "30px" }}>
                            {subjectname}
                            <Books key={subject} body={bodyContent.slice(0, 5)} link={"\\" + links[index]} />
                        </div>
                    );
                } catch (error) {
                    console.error(`Error fetching ${subject} books:`, error);
                    return null;
                }
            }));

            setBookComponents(fetchedBookComponents.filter(component => component !== null));
        }

        fetchBooks();
    }, [subjects,links]);
{/*color:"rgb(168,168,168"*/}
    return (
        <div style={{ color: "white",fontWeight:"700",fontFamily:"monospace"}}>
            <h2 style={{ textAlign: "center",fontSize:"35px" }}>BOOKS</h2>
            <div>
                {bookComponents}
            </div>
        </div>
    );
}
