export default function shapeInput (ip) {
  if (/^[\s\d.]*$/.test(ip)) {
    if (/\d\s+\d/g.test(ip)) {
      return false
    } else {
      return ip.replace(/\s/g, '')
    }
  } else {
    return false
  }
}
