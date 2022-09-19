// eslint-disable-line
export const isEmail = (email) => new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)
