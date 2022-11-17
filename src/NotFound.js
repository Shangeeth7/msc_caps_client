import "./notFound.css";
import { PageHeader, Divider } from "antd";
import React from "react";

export function NotFound() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="MSC"
        subTitle="Motorcycle Servicing Company"
      />

      <div className="image-container" alt="error404"></div>
    </div>
  );
}
