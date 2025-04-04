import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FaPen, FaSave, FaTimes } from "react-icons/fa";

const ProfileSection = () => {
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    name: user.name || "",
    bio: "A passionate content creator",
    email: user.email || "",
    phone: "",
    address: "",
    location: "",
    occupation: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    imageUrl: user.profilePicture || "",
  });

  const [previewImage, setPreviewImage] = useState(formData.imageUrl);
  const [isEditing, setIsEditing] = useState(false);

  const nameInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isEditing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleSave = () => {
    setFormData((prev) => ({ ...prev, imageUrl: previewImage }));
    alert("✅ Profile updated successfully!");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setPreviewImage(formData.imageUrl);
    setIsEditing(false);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-100">
      <div className="flex flex-col items-center text-center">
        <div className="relative group">
          <img
            src={previewImage}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md dark:border-gray-700"
          />
          {isEditing && (
            <label
              htmlFor="profile-image"
              className="absolute bottom-0 right-0 cursor-pointer bg-indigo-600 text-white p-2 rounded-full shadow-md hover:bg-indigo-700 transition"
              aria-label="Change Profile Picture"
            >
              <input
                id="profile-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <FaPen size={14} />
            </label>
          )}
        </div>

        {isEditing ? (
          <input
            type="text"
            name="name"
            ref={nameInputRef}
            value={formData.name}
            onChange={handleInputChange}
            className="mt-4 text-xl font-semibold bg-transparent border-b border-gray-300 dark:border-gray-700 p-2 focus:outline-none"
            placeholder="Full Name"
          />
        ) : (
          <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">{formData.name}</h2>
        )}

        {isEditing ? (
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="mt-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 w-full max-w-md border dark:border-gray-600 rounded-md p-2"
            placeholder="Short bio"
          />
        ) : (
          <p className="text-gray-600 dark:text-gray-400 mt-2">{formData.bio}</p>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { label: "Email", name: "email", type: "email", disabled: true },
          { label: "Phone", name: "phone", type: "text" },
          { label: "Address", name: "address", type: "text" },
          { label: "Location", name: "location", type: "text" },
          { label: "Occupation", name: "occupation", type: "text" },
          { label: "LinkedIn", name: "linkedin", type: "url" },
          { label: "Twitter", name: "twitter", type: "url" },
          { label: "Instagram", name: "instagram", type: "url" },
          { label: "Facebook", name: "facebook", type: "url" },
        ].map(({ label, name, type, disabled }) => (
          <div key={name} className="flex flex-col">
            <label
              htmlFor={name}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {label}
            </label>
            <input
              id={name}
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              disabled={disabled || !isEditing}
              placeholder={`Enter ${label}`}
              className={`p-2 rounded-md border focus:outline-none focus:ring-2 ${
                disabled
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-400"
                  : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-indigo-500"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-full"
              aria-label="Save Profile"
            >
              <FaSave size={14} />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-5 rounded-full dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
              aria-label="Cancel"
            >
              <FaTimes size={14} />
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-5 rounded-full dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            aria-label="Edit Profile"
          >
            <FaPen size={14} />
            Edit Profile
          </button>
        )}
      </div>
    </section>
  );
};

export default ProfileSection;
