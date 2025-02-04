import React from 'react';
import { Card, Form} from 'react-bootstrap';

const PreviewCardHeader = ({ title } : any) => {
    return (
        <React.Fragment>
            <Card.Header className="align-items-center d-flex" style={{border:'none',borderRadius:'14px 14px 0 0'}} >
                <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
                <div className="flex-shrink-0">
                    
                    {/* <div className="form-check form-switch form-switch-right form-switch-md">
                        <Form.Label className="form-label text-muted">Show Code</Form.Label>
                        <Form.Check.Input className="form-check-input code-switcher" type="checkbox" />
                    </div> */}
                </div>
                <div>
                    
                </div>
            </Card.Header>
            <Card.Header className="justify-content-between " style={{border:'none',borderRadius:'14px 14px 0 0',padding:'0px 10px'}} >
          
                <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'white',padding:'5px 10px',margin:'7px 0', borderRadius:'10px', boxShadow: "2px 2px 15px #E1DFDF"}}>
                    <h5 style={{marginTop:'8px'}}>{"Name"}</h5>
                    <h5 style={{marginTop:'8px'}}>{"Due"}</h5>
                </div>
                                           
            </Card.Header>
        </React.Fragment>
    );
}

export default PreviewCardHeader;