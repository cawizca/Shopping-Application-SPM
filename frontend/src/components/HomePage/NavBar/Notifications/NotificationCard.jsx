import NotificationIcon from '../../../../images/NotificationIcon.png';
import { UilCheck } from '@iconscout/react-unicons';
export default function NotificationCard() {
    return(
        <div className="notification-card">

            <div className="notification-card-icon">
                <img src={NotificationIcon} />
            </div>
            <div className="notification-card-text">
                <h6>Tomato restocked.</h6>
                <p>Your favourite food tomato restocked. You can buy it now.</p>
            </div>
            <div className="notification-card-button">
                <div className="red-square"><UilCheck style={{position:"relative", top:"5%", left:"5%"}} /></div>
            </div>

        </div>
    );
}