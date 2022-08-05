
export interface QrKeyObject {
    data: KeyData;
    code: number;
  }
  
  interface KeyData {
    code: number;
    unikey: string;
  }

export interface QrCreate {
  code: number;
  data: CreateData;
}

interface CreateData {
  qrurl: string;
  qrimg: string;
}

export interface QrCheck {
    code: number;
    message: string;
    cookie: string;
  }