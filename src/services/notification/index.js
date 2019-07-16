// Mock data
import notifications from 'mock/notifications';

export const getNotifications = (limit = 6) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log({notifications: notifications.slice(0, limit)})
      resolve({
        notifications: notifications.slice(0, limit),
        notificationsCount: notifications.length
      });
    }, 700);
  });
};
