import './Header.scss';
import {Menu} from 'semantic-ui-react'
import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

export default function Header() {
    const currentPath = useLocation ();
    console.log(currentPath);
    const finalCurrentPath = currentPath.pathname.replace("/", "");
    const [activeItem, setActiveItem] = useState ("");
    const history = useNavigate();

    const itemclick = (e, {name}) => {
        setActiveItem(name);
        history(name, {replace:true});
    };

    return (
        <div className='header-menu'>
            <Menu secondary>
                <Menu.Item name="inicio" acive={activeItem==="inicio"} onClick={itemclick}/>
                <Menu.Item name="series" acive={activeItem==="series"} onClick={itemclick}/>
                <Menu.Item name="comics" acive={activeItem==="comics"} onClick={itemclick}/>
            </Menu>
        </div>
    )
};
