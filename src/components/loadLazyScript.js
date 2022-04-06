import React, {useEffect} from "react";

const LoadLazyScript = ({path})=> {
   
    useEffect(() => {  
        const script = document.createElement('script');
        script.src = path;        
        document.body.appendChild(script);
      },[]);
    return null;
}

export default LoadLazyScript;