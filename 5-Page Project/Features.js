import React, {  useState } from 'react'
import FeatureApi from './FeatureApi'
import FeatureCard from './FeatureCard'
// import Port from './Port'


const Features = () => {
  const[menuData, setMenuData] = useState(FeatureApi);

  return(
    <>
      <FeatureCard menuData={menuData} />
    
    </>
  ) 
}
export default Features;


