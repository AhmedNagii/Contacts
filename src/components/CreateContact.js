import React from "react";
import ImageInput from "./ImageInput";
import { Link } from "react-router-dom"
import serializeForm  from "form-serialize"

const CreateContact = ({onCreateContact}) => {

const handelSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true })

    if(onCreateContact){
        onCreateContact(values)
    }
    console.log("values: " , values)
}

    return (
        <div>
            <Link className="close-create-contact" to="/">close</Link>
            <form onSubmit={handelSubmit} className="create-contact-form">
                <ImageInput
                    className="create-contact-avatar-input"
                    name="avatarURL"
                    maxHeight={64} />

                <div className="create-contact-details">
                    <input type="text" name="handle" placeholder="Name" />
                    <input type="text" name="handle" placeholder="Handle" />

                    <button >Add contact</button>
                </div>

            </form>
        </div>)

}


export default CreateContact;