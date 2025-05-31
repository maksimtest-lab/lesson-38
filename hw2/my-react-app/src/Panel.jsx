import './Panel.css';

export default function Panel({ title, isOpen, handleToggle, children }) {

  return (<div className="panel">
    <div className="panel-title" onClick={handleToggle}>
      {title}
    </div>
    {/* {isOpen && <div className="panel-content">{children}</div>} */}
    <div className={"panel-content " + (isOpen ? 'active' : '')}>{String(isOpen)} ss {children}</div>
  </div>)
};