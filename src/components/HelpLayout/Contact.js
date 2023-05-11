import { Form, redirect, useActionData } from "react-router-dom"

export default function Contact() {
  const data = useActionData();

  return (
    <div className='contact-container'>


      <h2>Contact Us</h2>

      <Form method="post" action="/help/contact">
        <label>
            <span>Your email:</span>
            <input name="email" type="email" required />
        </label>
        <label>
            <span>Your message:</span>
            <textarea name="message" rows="4" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>

    </div>
  )
}


// action function
export const contactAction = async ( {request} ) => {

  const data = await request.formData();

  const formDatas = {
    email : data.get('email'),
    message : data.get('message')
  }

  // send your post request
  if(formDatas.message.length < 10) {
    return {error : "The message length must be more than 10 characters!"}
  }



  // redirect the user
  return redirect("/")
}



