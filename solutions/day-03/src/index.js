import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import profilePicture from './images/oviyaan.JPG';
import clockIcon from './images/clock-regular.svg';


const rootElement = document.querySelector('.root');
const root = createRoot(rootElement);

const user = {
  firstName: 'Oviyaan',
  lastName: 'Hegde',
  jobTitle: 'Butt Snorkeler',
  country: 'North Macedonia',
  skills: [
    'HTML',
    'CSS',
    'JS',
    'Python',
    'Ruby',
    'Haskell',
    'Julia',
    'Boob'
  ],
  joinDate: 'Feb 21st, 2020'
}

user.fullName = user.firstName + ' ' + user.lastName;

const profilePictureElement = (
  <img src={profilePicture} className='profile-picture'></img>
)

const details = (
  <div>
    <span className='name'>{user.fullName}</span>
    <br />
    <span className='job-title'>{user.jobTitle}</span>, <span className='country'>{user.country}</span>
  </div>
)

const skills = (
  <div className='skills'>
    {user.skills.map((skill) => <div className='skill-item'>{skill}</div>)}
  </div>
)

const joinDate = (
  <div className='join-date'>
    <img src={clockIcon} id="clock-icon" /> Joined {user.joinDate}
  </div>
)

const app = (
  <div className='card'>
    {profilePictureElement}
    {details}
    <strong>SKILLS:</strong>
    {skills}
    {joinDate}
  </div>
)

root.render(app)