import { DashboardTemplate } from "@/components/dashboard/components/dashboardTemplate";
import React from "react";

export default function layout({ children }) {
  return <DashboardTemplate>{children}</DashboardTemplate>;
}
