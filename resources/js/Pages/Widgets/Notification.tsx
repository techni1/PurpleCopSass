import { Card } from "react-bootstrap"
import './Notification.scss'
export default function Notification() {

    const notifications = ([
        {
            title: 'Policy',
            message: 'DPIA Guidance Note-Update',
            time: '35m ago'
        },
        {
            title: 'Evidence',
            message: 'Risk Assessment Report-Assigned',
            time: '38m ago'
        },
        {
            title: 'Policy',
            message: 'Continual Improvement Procedure-Update',
            time: '40m ago'
        },
        {
            title: 'Evidence',
            message: 'Business Impact Analysis Report-Added',
            time: '35m ago'
        },
        {
            title: 'Corrective Action',
            message: 'Corrective action without source-Review',
            time: '30m ago'
        },
        {
            title: 'Corrective Action',
            message: 'make a policy of BYOD-Assigned',
            time: '32m ago'
        },
        {
            title: 'Policy',
            message: 'Employee Handbook-Added',
            time: '1h ago'
        },
        {
            title: 'Risk Register',
            message: 'Risk1 Added',
            time: '1day ago'
        },
        {
            title: 'Audit Center',
            message: 'soc internal audit-New Findig',
            time: '1day ago'
        },
        {
            title: 'Audit Center',
            message: 'Implementation of ISO 27001-New Added',
            time: '1day ago'
        },
        {
            title: 'Policy',
            message: 'DPIA Guidance Note-Update',
            time: '1day ago'
        },
        {
            title: 'Evidence',
            message: 'Risk Assessment Report-Assigned',
            time: '2day ago'
        },
        {
            title: 'Policy',
            message: 'Continual Improvement Procedure-Update',
            time: '2day ago'
        },
    ])

    return (
        <div className="notification_card">
            <Card style={{ borderRadius: '14px', height: '435px', overflow: 'auto' }}>
                <div className="notification_heading">
                    <h5>Notifications</h5>
                    <span><i className="ri-more-2-fill" style={{ fontSize: '18px', fontWeight: '800' }}></i></span>
                </div>
                {
                    notifications.map((notification, key) => (


                        <div key={key} className="notification_row">

                            <div className="notification_content">
                                <span><i className="bx bxs-bell notificaation_icon" style={{ color: '#7B00FF' }}></i></span>
                                <div className="notification_headline">
                                    <p>{notification.title}</p>
                                    <span>{notification.message}</span>
                                </div>

                            </div>
                            <div><span style={{ fontSize: '12px' }}>{notification.time}</span></div>
                        </div>
                    ))
                }

            </Card>

        </div>
    )
}