import React from "react";
import Image from "../components/Image";

export default function CreatePinpage() {
  return (
    <div className="createPage mb-10">
      <div className="createTop">
        <h1 className="text-xl font-medium">Create Pin</h1>
        <span className="primary-button">Publish</span>
      </div>

      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="/general/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            We recommend using high quality .jpg files less than 20 MB or .mp4
            files less than 200 MB.
          </div>
        </div>

        <div className="createForm">
          <div className="createFormItem">
            <label htmlFor="title" className="text-base text-gray-600 font-bold">
              Title
            </label>
            <input
              type="text"
              placeholder="Add a title"
              name="title"
              id="title"
              className="text-base text-gray-600 p-4 border-2 border-solid border-gray-400 rounded-2xl"
            />
          </div>

          <div className="createFormItem">
            <label htmlFor="description" className="text-base text-gray-600 font-bold">
              Description
            </label>
            <textarea
              rows={6}
              type="text"
              placeholder="Add a detailed Description"
              name="description"
              id="description"
              className="text-base text-gray-600 p-4 border-2 border-solid border-gray-400 rounded-2xl resize-none"
            />
          </div>

          <div className="createFormItem">
            <label htmlFor="link" className="text-base text-gray-600 font-bold">
              Link
            </label>
            <input
              type="text"
              placeholder="Add a link"
              name="link"
              id="link"
              className="text-base text-gray-600 p-4 border-2 border-solid border-gray-400 rounded-2xl"
            />
          </div>

          <div className="createFormItem">
            <label htmlFor="board" className="text-base text-gray-600 font-bold">
              Board
            </label>
            <select name="board" id="board" className="text-base text-gray-600 p-4 border-2 border-solid border-gray-400 rounded-2xl">
              <option>Choose a board: </option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </div>

          <div className="createFormItem">
            <label htmlFor="tags" className="text-base text-gray-600 font-bold">
              Tagged topics
            </label>
            <input
              type="text"
              placeholder="Add a tag"
              name="tags"
              id="tags"
              className="text-base text-gray-600 p-4 border-2 border-solid border-gray-400 rounded-2xl"
            />
            <small className="text-gray-700">Don't worry, people won't see your tags </small>
          </div>
        </div>
      </div>
    </div>
  );
}
