import { getFullName } from './utils'
import '../styles/index.scss'

const firstName = getFullName('Bob Cobby');

console.log(firstName);

class Name {
  name = 'Anon';
}