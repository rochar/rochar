import React from "react";

const RouteLink = ({className, href, children, target}) => {
    const onClick = (event)=>{
        event.preventDefault();
        window.history.pushState({},"", href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return <a onClick={onClick} className={className} href={href} target={target}>{children}</a>

}

export default RouteLink;