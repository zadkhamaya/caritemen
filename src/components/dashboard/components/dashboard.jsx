import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export const Dashboard = () => {
  return (
    <main className="space-y-8">
      <section>
        <h2>Dashboard</h2>
        <p>Hello there!</p>
      </section>
      <section className="grid grid-cols-2 gap-6">
        <Card shadow="sm">
          <CardBody className="p-8 space-y-4">
            <h6>Total Events</h6>
            <h1>0</h1>
          </CardBody>
        </Card>
        <Card shadow="sm">
          <CardBody className="p-8 space-y-4">
            <h6>Events Participation</h6>
            <h1>0</h1>
          </CardBody>
        </Card>
      </section>
    </main>
  );
};
