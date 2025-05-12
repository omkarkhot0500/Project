import React from 'react';
import styled, { keyframes } from 'styled-components';
import { membersRow1 } from '../TeamData/EXBO';
import { membersRow2 } from '../TeamData/Core';
import logo from '../assets/logo.png'; // Example image

const scrollRight = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(100%); }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 300px; /* Adjust height as needed */
`;

const Row = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${props => props.direction === 'right' ? scrollRight : scrollLeft} 10s linear infinite;
  &:hover {
  }
`;

const ExboImage = styled.img`
  width: 150px; /* Adjust size as needed */
  height: 150px; /* Adjust size as needed */
  margin: 10px;
  border-radius: 20%; /* Optional: for circular images */
  object-fit: contain; /* Ensure the image covers the area */
`;
const CoreImage = styled.img`
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  margin: 10px;
  border-radius: 20%; /* Optional: for circular images */
  object-fit: contain; /* Ensure the image covers the area */
`;


// Duplicate the arrays to create an infinite scrolling effect
const infiniteMembersRow1 = [...membersRow1, ...membersRow1, ...membersRow1];
const infiniteMembersRow2 = [...membersRow2, ...membersRow2, ...membersRow2];

const Carousel = () => {
  return (
    <CarouselContainer>
      <Row direction="right">
        {infiniteMembersRow1.map((member, index) => (
          <ExboImage key={`${member.id}-${index}`} src={member.imgSrc} alt={`Member ${member.id}`} />
        ))}
      </Row>
      <Row direction="left">
        {infiniteMembersRow2.map((member, index) => (
          <CoreImage key={`${member.id}-${index}`} src={member.imgSrc} alt={`Member ${member.id}`} />
        ))}
      </Row>
    </CarouselContainer>
  );
};

export default Carousel;