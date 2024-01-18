import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.scss';
import LinkModel from '../../../models/link';

const links: LinkModel[] = [
  { title: 'SHOP', path: '/shop' },
  { title: 'CONTACT', path: '/contact' },
  { title: 'SIGN IN', path: '/sign-in' },
];

const NavigationBar: React.FC = (props) => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link to={'/'} className='logo-container'>
          <div>Logo</div>
        </Link>

        <div className='nav-links-container'>
          {links.map((link) => {
            return (
              <Link className='nav-link' to={link.path} key={link.path}>
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
