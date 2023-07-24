import React, { useEffect, useState } from 'react'
import "./css/Login.css"
import { db } from "./server/firebaseConfig";
import { doc, updateDoc } from 'firebase/firestore';
import img1 from './img/skillop.png'
import { useSelector } from 'react-redux';
import { EMAIL_KEY, getItem } from './localStorageConfig';

function Infocollector() {
  // const dispatch = useDispatch();
  const [experience, setExperience] = useState("")
  const [education, setEducation] = useState("")
  const [skills, setSkills] = useState("")
  const [about, setAbout] = useState("")
  const [future, setFuture] = useState("")

  const [past, setPast] = useState("")
  // const [linkedin, setLinkedin] = useState("")

  // const dispatch = useDispatch();

  const myProfile = useSelector(s => s.userReducer.myProfile)


  async function updateUser() {
    try {

      const userRef = doc(db, "users", getItem(EMAIL_KEY));


      await updateDoc(userRef, {
        experience,
        education,
        skills,
        about,
        future,
        past
      });

    } catch (e) {

    }

  }







  const register = (e) => {
    e.preventDefault();
    updateUser();

    // if (!experience) {
    //   return alert("Experience is required.")
    // }
    // if (!education) {
    //   return alert("Education is required.")
    // }
    // if (!skills) {
    //   return alert("Skills is required.")
    // }
    // if (!about) {
    //   return alert("About is required.")
    // }
    // if (!linkedin) {
    //   return alert("Linkedin is required.")
    // }
  }

  function setProfile() {
    setExperience(myProfile.experience);
    setEducation(myProfile.education);
    setSkills(myProfile.skills);
    setAbout(myProfile.about);
    setFuture(myProfile.future);
    setPast(myProfile.past);

  }


  useEffect(() => {
    // dispatch(getMyInfo())
    setProfile();

  }, [myProfile])

  return (

    <div className='loginScreen'>
      <img src={img1} alt="skillop" />



      <form onSubmit={register}>
        <input required type='text' placeholder='Experience' value={experience} onChange={e => setExperience(e.target.value)}></input>
        <input required type='text' placeholder='Education' value={education} onChange={e => setEducation(e.target.value)} ></input>
        <input required type='text' placeholder='Skills' value={skills} onChange={e => setSkills(e.target.value)}></input>
        <input required type='text' placeholder='About' value={about} onChange={e => setAbout(e.target.value)} ></input>
        <input required type='text' placeholder='Past Journey Experience' value={past} onChange={e => setPast(e.target.value)} ></input>
        <input required type='text' placeholder='Future Journey Experience' value={future} onChange={e => setFuture(e.target.value)}></input>
        {/* <input required type='text' placeholder='linkedin' value={linkedin} onChange={e => setLinkedin(e.target.value)}></input> */}



        <input type='submit' placeholder='Continue'></input>

      </form>








    </div>
  )
}

export default Infocollector;
