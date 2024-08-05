// CommentsForm.jsx code

import { useFormik } from "formik";

    // A custom validation function. This must return an object
    // which keys are symmetrical to our values/initialValues
    // copied form formik.org
    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Required';
        } else if (values.username.length > 15) { 
            errors.username = 'Must be 15 characters or less';
        }
        if (!values.comment) {
            errors.comment = 'Required';
        } else if (values.comment.length > 200) {
            errors.comment = 'Must be 200 characters or less';
        }
        if (!values.rating) {
            errors.rating = 'Required';
        }
        return errors;
    };
    
    export default function CommentsForm({ addNewComment }) {
        const formik = useFormik({
            initialValues: {
                username: "",
                comment: "",
                rating: 5
            },
            validate,
            onSubmit: values => {
                // Call your addNewComment function here to add the comment
                addNewComment(values);
                // Optionally, you can reset the form after submission
                formik.resetForm();
            }
        });
    
        return (
            <div className="comments-form">
                <h1><u><i>Leave a comment</i></u></h1>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="username">
                        <h3><u><i>Username:</i></u></h3>
                    </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Your username"
                        id="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.username ? 
                    <div style={{ color: 'red', fontWeight: '700', fontStyle: 'italic' }}>
                        {formik.errors.username}
                    </div> : null}

                    <br/>

                    <label htmlFor="comment">
                        <h3><u><i>Comment:</i></u></h3>
                    </label>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="Your comment"
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.comment ? 
                    <div style={{ color: 'red', fontWeight: '700', fontStyle: 'italic' }}>
                        {formik.errors.comment}
                    </div> : null}

                    <br/> <br />

                    <label htmlFor="rating">
                        <b><u><i>Rating:</i></u></b> 
                        &nbsp;&nbsp;&nbsp;               
                    </label>
                    <input
                        type="number"
                        placeholder="rate"
                        min={1}
                        max={5}
                        id="rating"
                        name="rating"
                        value={formik.values.rating}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.rating ? 
                    <div style={{ color: 'red', fontWeight: '700', fontStyle: 'italic' }}>
                        {formik.errors.rating}
                    </div> : null}

                    <br/> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }