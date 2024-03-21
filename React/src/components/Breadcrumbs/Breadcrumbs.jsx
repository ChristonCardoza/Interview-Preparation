import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  console.log(pathnames);
  let breadcrumPath = "";

  return (
    <div className="breadcrumbs">
      {pathnames.length > 0 && <Link to="/">Home</Link>}
      {pathnames.map((name, index) => {
        breadcrumPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span>/ {name}</span>
        ) : (
          <span>
            /<Link to={breadcrumPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
