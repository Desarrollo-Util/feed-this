/**
 * User model
 */
export class UserModel {
  /**
   * Constructor
   * @param id User ID
   * @param email User email
   * @param password User password
   * @param twitter_api_key User Twitter account api key
   * @param twitter_api_secret User Twitter account api secret
   */
  constructor(
    public readonly id: string,
    public email: string,
    public password: string,
    public twitter_api_key?: string,
    public twitter_api_secret?: string
  ) {}
}
