import './TabsItem.css';

export default function TabsItem({ title, isOpen, handleToggle, children }) {

    return (
        <>
            <div className={"tabsItem-title " + (isOpen ? 'active' : '')} onClick={handleToggle}>
            {title}
            </div>
            <div className={"tabsItem-content " + (isOpen ? 'active' : '')}>{String(isOpen)} ss {children}</div>
        </>
    )
};