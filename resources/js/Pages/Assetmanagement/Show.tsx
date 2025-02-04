import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../Layouts";
import BreadCrumb from "../../Components/Common/BreadCrumb";

export default function Show({ auth, assetmangement }: any) {
    return (
        <React.Fragment>
            <pre>
                {JSON.stringify(
                    assetmangement,
                    undefined,
                    2
                )}


            </pre>
        </React.Fragment>
    );
}

Show.layout = (page: any) => <Layout children={page} />;