export const formatDate = (v) => {
  if (!v)
    return ''

  let date = new Date(v)
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()

  month = month.toString().length === 1 ? '0' + (month + 1) : month + 1
  day = day.toString().length === 1 ? '0' + day : day

  return `${year}-${month}-${day}`
}

export const capitalized = (v) => {
  let str = v[0]
  return str.toUpperCase() + v.slice(1)
}

export const formatTime = (v) => {
  let date = new Date(v)
  let hour = date.getHours()
  let min = date.getMinutes()

  return `${hour}:${min}`
}

export const secInHour = (v) => {
  let min = v % 3600
  let hour = (v - min) / 3600
  min = min / 60

  return `${hour}:${min}`
}