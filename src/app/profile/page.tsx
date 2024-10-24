import options from "@/config/auth";
import { getServerSession } from "next-auth";

async function Profile() {
    const session = await getServerSession(options);
  return (
    <pre>{JSON.stringify(session)}</pre>
  )
}

export default Profile