const { Timestamp, UUID } = require("mongodb")

const NOTIFICATION_TOPIC = {
  ALL: "all",
  ADMIN: "admin"
}

const NOTIFICATION_TYPES = {
  DEFAULT: "default",
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error"
}

/**
 * 
 * @param {string | UUID} token 
 * @param {UUID | UUID} userId 
 * @returns 
 */

function CreateNotificationTokenData(token, userId){
  return {
    token,
    user_id: userId,
    timestamp: new Date()
  }
}

/**
 * @param notificationId
 * @param userId
 * @param title
 * @param body
 * @param type
 * @param image
 * @param filter
 * @returns {{id: *, user_id: *, title: *, body: *, type: *, image: *, timestamp: Date}}
 * @constructor
 */
function CreateNotificationData(notificationId, userId, title, body, type = NOTIFICATION_TYPES.DEFAULT, image = '', filter = {}) {
  return {
    id: notificationId,
    user_id: userId,
    title,
    body,
    type,
    image,
    ...filter,
    timestamp: new Date(),
  };
}

