import { randomUUIDv4 } from '../helpers';
import { User } from './user.model';

/**
 * Message interface
 */
export interface Message {
  /**
   * Uuid generate from {@link randomUUIDv4}
   */
  id: string;

  /**
   * Message author
   */
  user: User;

  /**
   * Timestamp generate from {@link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/now}
   */
  time: number;

  /**
   * Message text
   */
  text: string;
}
