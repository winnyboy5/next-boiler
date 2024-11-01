import options from "@/config/auth";
import { Card, CardBody, User } from "@nextui-org/react";
import { getServerSession } from "next-auth";

async function Profile() {
  const session = await getServerSession(options);
  return (
    // <pre>{JSON.stringify(session)}</pre>
    <Card className="max-w-md mx-auto mt-4">
      <CardBody>
        <User
          name={session?.user?.name}
          description={session?.user?.email}
          avatarProps={{
            showFallback: !session?.user?.image,
            src: session?.user?.image || ""
          }}
        />
      </CardBody>
    </Card>
  )
}

export default Profile