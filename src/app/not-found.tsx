import { Card, CardBody } from "@nextui-org/react";
import { IconError404 } from "@tabler/icons-react";


const NotFound = () => {
  return (
    <Card className="max-w-md mx-auto mt-10">
        <CardBody className="flex items-center justify-center gap-2">
            <IconError404 width="128" height="128" />
            <p className="text-2xl">
                This page cannot be found.
            </p>
        </CardBody>
    </Card>
  )
}

export default NotFound;

