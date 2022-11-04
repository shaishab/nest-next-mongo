import { FC } from 'react';
import { IPost } from '../../shared/dto/post.interface';

interface Props {
  post: IPost;
}

const handleSubmit = async (event: any) => {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault()

  // Get data from the form.
  const data = {
    title: event.target.title.value,
    content: event.target.content.value,
  }

  const JSONdata = JSON.stringify(data)

  // API endpoint where we send form data.
  const endpoint = '/api/blog/add/new'

  // Form the request for sending data to the server.
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  }

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options)

  // Get the response data from server as JSON.
  const result = await response.json()
  alert(`Response from server: ${result.message}`)
}

const PostNew = () => {

  
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-6">
          <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
            id="title"
            required
            placeholder="Post title"/>
        </div>
        <div className="form-group mb-6">
          <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          required
          id="content"
          rows={10}
          placeholder="Content" ></textarea>
        </div>
        <div className="form-group form-check text-center mb-6">
          <input type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck87" defaultChecked />
          <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">I want to post</label>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostNew;
