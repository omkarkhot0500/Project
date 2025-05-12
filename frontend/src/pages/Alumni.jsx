import React from 'react'
import './style/alumni.css'
import image from '../assets/LinkedIn_logo_initials.webp'

const Alumni = () => {

  const AlumniMembers = [
    
    {
      id: 1,
      name: 'Ronit Parakh',
      designation: 'Co-Lead',
      imageUrl: '/src/img/Screenshot 2024-08-15 at 00.07.03.png',
      linkedinUrl: 'https://www.linkedin.com/in/ronit-parakh/'
    },
    {
      id: 2,
      name: 'Reyan Singh',
      designation: 'Co-Lead',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/janesmith'
    },
    
    {
      id: 3,
      name: 'Manan Sharma',
      designation: 'Co-Lead',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/michaeljohnson'
    },
    
    {
      id: 4,
      name: 'Priyanka',
      designation: 'Design Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/alicebrown'
    },
    {
      id: 5,
      name: 'Sakshi Singh',
      designation: 'UI/UX Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/chrisgreen'
    },
    {
      id: 6,
      name: 'Aarav Mahajan',
      designation: 'App Dev Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
    },
    {
      id: 7,
      name: 'Pushan Aggarwal',
      designation: 'CyberSecurity Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/davidblue'
    },
    {
      id: 8,
      name: 'Sharath Chandra',
      designation: 'Web Dev Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/sophiablack'
    },
    {
      id: 9,
      name: 'Aryan Panja',
      designation: 'ML Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/danielgrey'
    },
    {
      id: 10,
      name: 'Amandeep Singh',
      designation: 'ML Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/emilyred'
    },
    {
      id: 11,
      name: 'Nimish Duggal',
      designation: 'Finance Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/laurawhite'
    },
    {
      id: 12,
      name: 'Dimpi Jain',
      designation: 'EM Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/davidblue'
    },
    {
      id: 13,
      name: 'Samkit Jaina',
      designation: 'Logistics Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/sophiablack'
    },
    {
      id: 14,
      name: 'Yuvraj Singh',
      designation: 'RIOT(Robotics and IOT) Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/danielgrey'
    },
    {
      id: 15,
      name: 'Aamna Abdin',
      designation: 'Product Mentor',
      imageUrl: 'https://via.placeholder.com/150',
      linkedinUrl: 'https://www.linkedin.com/in/emilyred'
    }];

  return (
  <>
    <div className="content">
      <h1 className='h1'>Our Alumni</h1>
    </div>

    <div  className="alumni-container" >
      {AlumniMembers.map(member => (
        <div key={member.id} className="alumni-member" >
          <img src={member.imageUrl} alt={member.name } className='profile-image' />
        <div className='alumni-team'>
          <div className='alumni-info'>
            <h2 className='h3'>{member.name}</h2>
            <p className='p'>{member.designation}</p>
          </div>
          <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img className="linkedin" src={image} alt="Profile Picture" />
          </a>
        </div>
        </div>
      ))}
    </div>

  </>
  )
}

export default Alumni