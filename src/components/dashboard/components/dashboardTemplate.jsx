import React from "react";
import Link from "next/link";
import {
  Activity,
  ClipboardSignature,
  CalendarCheck2,
  CalendarDays,
} from "lucide-react";
import { Logout } from "@/components/auth/components/Logout";

export const DashboardTemplate = ({ children }) => {
  return (
    <main className="flex h-screen">
      <aside className="w-[230px] border-r-2 p-8 flex flex-col justify-between">
        <div>
          <Link className="menu" href="/dashboard">
            <Activity />
            Dashboard
          </Link>
          <Link className="menu" href="/dashboard/events">
            <CalendarCheck2 />
            Your Events
          </Link>
          <Link className="menu" href="/dashboard/allevents">
            <CalendarDays />
            All Events
          </Link>
          <Link className="menu" href="/dashboard/participate">
            <ClipboardSignature />
            Participate
          </Link>
        </div>
        <Logout />
      </aside>
      <section className="w-[calc(100vw-230px)] p-8">
        <div className="max-w-5xl m-auto">{children}</div>
      </section>
    </main>
  );
};
