const {GetDatabase} = require("../../db/database.js");

async function StoreNotificationData(notificationData) {
  const { collections } = await GetDatabase();

  return collections.notifications.insertOne(
    JSON.parse(JSON.stringify(notificationData))
  );
}

async function GetNotificationsByUserId(userId) {
  const { collections } = await GetDatabase();

  return collections.notifications
    .find(
      {
        user_id: userId,
      },
      {
        sort: {
          date: -1,
        },
      }
    )
    .toArray();
}

async function GetNotificationById(notificationId) {
  const { collections } = await GetDatabase();

  return collections.notifications.findOne({
    id: notificationId,
  });
}

async function GetNotificationTokensByUserId(userId) {
  const { collections } = await GetDatabase();

  return collections.notification_tokens
    .find(
      {
        user_id: userId,
      },
      {
        sort: {
          date: -1,
        },
      }
    )
    .toArray();
}

async function DeleteNotificationById(notificationId) {
  const { collections } = await GetDatabase();

  return collections.notifications.deleteOne({
    id: notificationId,
  });
}


module.exports = {
  StoreNotificationData,
  GetNotificationsByUserId,
  GetNotificationById,
  StoreNotificationTokenData,
  GetNotificationTokensByUserId,
  DeleteNotificationById
};