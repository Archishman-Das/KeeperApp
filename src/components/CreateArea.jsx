import React, { useState } from "react";

function CreateArea(props) {
	const [note, setNote] = useState({ title: "", content: "" });
	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		setNote((prevNote) => {
			return { ...prevNote, [name]: value };
		});
	}
	return (
		<div>
			<form>
				<input
					name="title"
					onChange={handleChange}
					placeholder="Title"
					value={note.title}
				/>
				<textarea
					name="content"
					onChange={handleChange}
					placeholder="Take a note..."
					rows="3"
					value={note.content}
				/>
				<button
					onClick={(event) => {
						props.onAdd(note.title, note.content);
            setNote({ title: "", content: "" });
						event.preventDefault();
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default CreateArea;
