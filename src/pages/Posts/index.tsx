import { useAuth } from "../../hooks/useAuth";
import { Page } from "../../components/Page";

export function Posts() {
  const { user } = useAuth();

  return (
    <Page>oi</Page>
  )
}