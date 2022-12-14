export function formatDate(dateString: string) {
    const date = new Date(dateString)

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        year: 'numeric',
        month: 'short',
    }).format(date)

    return formattedDate
}

export function formatCurrency(value: number) {
    const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'narrowSymbol',
    }).format(value / 100)

    return formattedValue
}

export function getHowManyDates(dates: Date[]) {
    if (!dates.length) return 0

    const initialRentDay = dates[0].getDate()
    const finallRentDay = dates[1].getDate()

    return finallRentDay - initialRentDay
}
