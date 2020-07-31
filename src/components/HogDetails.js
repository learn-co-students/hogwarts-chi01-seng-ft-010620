import React from 'react';

export const HogDetails = ({hog}) => {
 console.log('hogdetails', hog )
 return(
     <div className="">
        <h3 className="achievementText">Highest Medal Achieved: {hog["highest medal achieved"]}</h3>
        <h3>Specialty: {hog.specialty}</h3>
        <h3>Weight: {hog.weight} pounds</h3>
    </div>
 )
}

export default HogDetails;