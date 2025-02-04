import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import Layout from "../../../Layouts";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import AssetsDetails from "./AssetsDetails";


export default function Risk({ auth, assets, success }: any) {


    const [showAssetslList, setShowAssetsList] = useState<boolean>(false);
    return (
        <React.Fragment>
            <Head title="Asset Management" />

            <div className="page-content">
                <Container fluid>
                    <AssetsDetails
                        show={showAssetslList}
                        setShow={setShowAssetsList}
                        assetsdata={assets}

                    />
                </Container>
            </div>
        </React.Fragment>
    );
}
Risk.layout = (page: any) => <Layout children={page} />;
