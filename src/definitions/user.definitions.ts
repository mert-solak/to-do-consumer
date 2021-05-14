export type UserName = string;

export type SendUserNameOnRequest = (userName: UserName) => () => void;
export type SetUserName = (listener: (username: UserName) => void) => void;
