import { Head } from "@inertiajs/react";
import { Container } from "react-bootstrap";
import Layout from "../../Layouts";
import SingleFinding from "./SingleFinding";

export default function Show({ finding }: any) {
  return (
    <>
      <Head title="Policy" />
      <div className="page-content">
        <Container fluid>
          {/* <pre>{JSON.stringify(finding, undefined, 2)}</pre> */}
          <SingleFinding finding={finding} />
        </Container>
      </div>
    </>
  );
}
Show.layout = (page: any) => <Layout children={page} />;
