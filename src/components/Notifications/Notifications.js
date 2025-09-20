import React, { useEffect, useState } from 'react';
import './Notifications.css';

const Notifications = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.on('notification', (notification) => {
      setNotifications(prev => [notification, ...prev]);
    });

    return () => {
      socket.off('notification');
    };
  }, [socket]);

  return (
    <div className="notification-list">
      <h4>Notifications</h4>
      {notifications.length === 0 && <p>No new notifications</p>}
      {notifications.map((n, idx) => (
        <div key={idx} className="notification-item">
          {n.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
