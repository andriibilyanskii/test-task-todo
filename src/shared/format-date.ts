function formatDate(dateString: string): string {
  if (!dateString) {
    return dateString
  }

  return new Date(dateString).toLocaleString('uk-UA', {
    'timeZone': 'Europe/Kiev',
    'day': 'numeric',
    'month': 'numeric',
    'year': 'numeric',
    'hour': '2-digit',
    'minute': '2-digit',
    'second': '2-digit',
  })
}

export { formatDate }
