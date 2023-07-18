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
export interface Basket {
  id: string;
  items: [
    {
      id?: number;
      trafficFineId: number;
      trafficFinePrice: number;
    }
  ];
}

export interface RegisterAgent {
  identityUserId: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
  phoneNumber: string;
  role: string;
}

export interface TokenType {
  email: string;
  given_name: string;
  role: string | object;
  nbf?: number;
  exp?: number;
  iat?: number;
  iss?: string;
  aud?: string;
}
export interface DriverType {
  id?: number;
  driverIdentity: string;
  name: string;
  lastName: string;
  phoneNumber: string;
}
export interface TrafficFine {
  id?: number;
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
