import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardBody className="text-center">
        <h1 className="text-5xl">Next.js Boiler</h1>
        <p className="text-xl mt-5">A simple Next.js boilerplate</p>
      </CardBody>
    </Card>
  );
}
