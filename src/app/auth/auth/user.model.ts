export class User {
    constructor(
        public status: boolean,
        public localId: number,
        public email:string,       
        private _token: string, 
        private _tokenExpirationDate: Date
        ) {}

        public get token() {
            if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
                return null; 
            }
            return this._token;
        }

        // public set token(value: string) {
        //     this._token = value;
        // }
}