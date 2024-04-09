import { useState } from "react";
import { baseUrl } from "../../Url";

export function useUpdateUserProfile() {
    const updateProfile = async (formData, availability, areaOfInterest, selectedLanguages, image) => {
      try {
        const authToken = localStorage.getItem('token');
        const form = new FormData();
        // form.append('name', formData.name);
        // form.append('email', formData.email);
        form.append('phoneNumber', formData.phoneNumber);
        form.append('gender', formData.gender);
        form.append('address', formData.address);
        form.append('language', selectedLanguages);
        form.append('qualification', formData.qualification);
        form.append('skillLevel', formData.skillLevel);
        form.append('areaOfInterest', areaOfInterest);
        form.append('goal', formData.goal);
        form.append('bio', formData.bio);
        form.append('availability', availability);
        form.append('additionalInfo', formData.additionalInfo);
        form.append('experience', formData.experience);

        form.append('image', image);
  
        const response = await fetch(
          ` ${baseUrlrl}/api/v1/users/editUser`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
            method: "PUT",
            body: form,
          }
        );
        const responseData = await response.json();
        if (response.ok) {
          console.log("profile updated successfully");
        }
      } catch (error) {
        console.log(error);
      }
    };
    return { updateProfile };
  }
  

  export function useGetAllUser() {
    const [allUser, setAllUser] = useState([]);
  
    const getAllUser = async () => {
      try {
        const authToken = localStorage.getItem('token');
        const response = await fetch(` ${baseUrl}/api/v1/users/userProfile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (response.ok) {
          const responseData = await response.json();
          setAllUser(responseData);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return { getAllUser, allUser };
  }

  export function useLoggedInUser() {
    const [loggedUser, setLoggedUser] = useState([]);
  
    const loggedInUser = async () => {
      try {
        const authToken = localStorage.getItem('token');
        const response = await fetch(` ${baseUrl}/api/v1/users/loggedInUserProfile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (response.ok) {
          const responseData = await response.json();
          setLoggedUser(responseData);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return { loggedInUser, loggedUser };
  }
  