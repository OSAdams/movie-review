export default function SearchString(param) {
  return param.split(' ').join('+');
}
