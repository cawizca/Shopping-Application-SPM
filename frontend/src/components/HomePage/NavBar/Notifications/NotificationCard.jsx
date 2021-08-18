import NotificationIcon from '../../../../images/NotificationIcon.png'
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
                <div className="red-square"></div>
            </div>

        </div>
    );
}