import { useParams } from "react-router-dom";
import normalizePagename from "./normalizePagename";

export default function usePagename(): string {
  const { page: pagename } = useParams<{ page: string }>();
  return normalizePagename(pagename);
}