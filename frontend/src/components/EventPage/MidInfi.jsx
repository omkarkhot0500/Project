import React from "react";
import { previous } from "../../TeamData/EventData";
import styles from "/src/Css/MidInfi.module.css";

function MidInfi() {
  // Step 2: Map only the img fields
  const images = previous.map(event => event.img);

  return (
    <div className={styles.mainContainer}>
      <section className={styles.enablea}>
        <div className={styles.marquee}>
          <ul className={styles.marqueeContent}>
            {/* Step 3: Render the images */}
            {images.map((img, index) => (
              <li key={index} className={styles.marqueeItem}>
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  style={{
                    width: '400px',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    minWidth: '400px'
                  }}
                />
              </li>
            ))}
            {/* Duplicate the images for seamless scrolling */}
            {images.map((img, index) => (
              <li key={`duplicate-${index}`} className={styles.marqueeItem}>
                <img 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  style={{
                    width: '400px',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    minWidth: '400px'
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MidInfi;