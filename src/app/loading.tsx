import { CircularProgress } from "@nextui-org/react";

export default function loading() {
    return <CircularProgress
        className="mx-auto mt-5"
        color="primary"
        aria-label="Loading..." />
}