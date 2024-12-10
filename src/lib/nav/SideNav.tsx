import React from 'react';
import { Link} from 'react-router-dom';
import { routes } from '../routes/approutes';
import { routesTypes } from '../types/types';

export default function SideNav() {
  return (
    <div className="main_navigation_container">
      <div className="title_container">side nav</div>
      <div className="navigatin_link_container">
        {routes &&
          routes
            .filter((item: routesTypes) => {
              return item.sideNav == true;
            })
            .map((singleRoute: routesTypes) => {
              console.log(singleRoute.routePath);
              return (
                <Link to={singleRoute.routePath}>
                  <div className="main_link_container">
                    <h2 className="link_title">{singleRoute.routeName}</h2>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}
