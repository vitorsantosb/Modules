const { GetNotificationsByUserId } = require("../repository/notifications.repository");

async function SendNotificationsForUser(user_id){
  const userNotifications = await GetNotificationsByUserId(user_id);
    
}