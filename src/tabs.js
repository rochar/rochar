const Tab = (props) => {
    return (
      <li className="nav-item" key={props.id}>
        <a
          className={`nav-link ${props.active ? "active" : ""}`} data-bs-toggle="tab" href={`#${props.id}`}>
          {props.title}
        </a>
      </li>
    );
  };
  export const Tabs = (props) => {
      const listItems = props.items.map((item) =>
            <Tab id={item.id} title={item.title} active={item.active} />
    );
    return (<ul className="nav nav-pills">
        {listItems}
    </ul>);
  };
  export const TabsContent = (props) => {
    return <div className="tab-content">{props.children}</div>;
  };
  export const TabContent = (props) => {
    return (
      <div id={`${props.id}`} className={`tab-pane fade show ${props.active ? "active" : ""}`}>
      <p>This page is under construction. Please come back soon!</p>   
    </div>
    );
  };

