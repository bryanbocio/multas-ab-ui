export interface Multas {
  id: number;
  driverIdentity: string;
  driverName: string;
  driverPhoneNumber: string;
  carPlate: string;
  reason: string;
  comment: string;
  latitude: string;
  longitude: string;
  dateCreated: Date;
  agentIdentity: string;
}

export interface TrafficFine{
  driverIdentity: string,
  driverName: string,
  driverPhoneNumber: string,
  carPlate: string,
  reason: string,
  comment: string,
  latitude: string,
  longitude: string,
  dateCreated: Date
  agentIdentity: string
}
export interface SignIn {
  email: string;
  password: string;
}
export interface SignUp {
  identityUserId?: string;
  email?: string;
  password?: string;
  name?: string;
  lastName?: string;
  phoneNumber?: string;
  confirmPassword?: string;
}
