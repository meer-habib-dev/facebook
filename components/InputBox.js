import Image from "next/image";
import React, { useRef, useState } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storageRef } from "../firebase";
import firebase from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const InputBox = () => {
  const inputRef = useRef(null);
  const imagePickerRef = useRef(null);
  const [imagePost, setImagePost] = useState(null);
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: "meer_habib",
      email: "meerhabib200@gmail.com",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
      timesStamp: new Date(),
    }).then((doc) => {
      if (imagePost) {
        const uploadtask = getStorage
          .ref(`posts/${doc.id}`)
          .putString(imagePost, "data_url");
        removeImage();
        uploadtask.on(
          "state_change",
          null,
          (error) => console.error(error),
          () => {
            //   when the task complete
            getStorage
              .ref("posts")
              .child(doc.id)
              .getDownloadURL()
              .then((url) => {
                db.collection("posts")
                  .doc(doc.id)
                  .set({ postImage: url }, { merge: true });
              });
          }
        );
      }
    });
    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImagePost(readerEvent?.target.result);
    };
  };
  const removeImage = () => {
    setImagePost(null);
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 items-center p-4">
        <Image
          className="rounded-full"
          src={
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          }
          width={40}
          height={40}
          layout="fixed"
          alt="user_image"
        />
        <form className="flex flex-1">
          <input
            type="text"
            ref={inputRef}
            placeholder="Whats on you mind"
            className="bg-gray-100 h-12 flex-grow rounded-full px-5 focus:outline-none"
          />
          <button type="submit" className=" hidden" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imagePost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter cursor-pointer hover:brightness-110 transition duration-150 transform hover:scale-105"
          >
            <img
              src={imagePost}
              alt="post image"
              className="h-10 object-contain"
            />
            <p className="text-xs text-red-500 text-center">remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          onClick={() => imagePickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm md:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={imagePickerRef}
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs md:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
