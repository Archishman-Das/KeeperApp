import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);
	function addItem(title, content) {
		const newNote = { title: [title], content: [content] };
		setNotes((prevNotes) => [...prevNotes, newNote]);
	}
	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((note, index) => {
				return id !== index;
			});
		});
	}
	return (
		<div>
			<Header />
			<CreateArea onAdd={addItem} />
			{notes.map((note, index) => (
				<Note
					key={index}
					id={index}
					title={note.title}
					content={note.content}
					onDel={deleteNote}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
