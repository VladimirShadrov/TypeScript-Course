const URL_DUMMY: string = 'https://dummyjson.com/users';

interface ResponseData {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}

interface User {
  address: AddressData;
  age: string;
  bank: UserBank;
  birthDate: string;
  bloodGroup: string;
  company: UserCompany;
  crypto: UserCrypto;
  domain: string;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: UserGender;
  height: number;
  id: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
}

interface AddressData {
  address: string;
  city: string;
  coordinates: CoordinatesData;
  postalCode: string;
  state: string;
}

interface CoordinatesData {
  lat: number;
  lng: number;
}

interface UserBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface UserCompany {
  address: AddressData;
  department: string;
  name: string;
  title: string;
}

interface UserCrypto {
  coin: string;
  network: string;
  wallet: string;
}

enum UserGender {
  male = 'male',
  female = 'female',
}

async function getUsers(url: string): Promise<User[]> {
  let users: User[] = [];
  try {
    const response: Response = await fetch(url);
    if (response.ok) {
      const responseData: ResponseData = await response.json();
      users = [...responseData.users];
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
  return users;
}
