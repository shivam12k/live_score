const Api_key = ' BtzBNz2Kk3fgBg3ap6u6UBUwwWA2';
export const getScore = () => {
    const url = `https://cricapi.com/api/matches?apikey=${Api_key}`.replace(/\s+/g, '');
    console.log(url)
    return (
        fetch(url).then(res => {
            return res.json();
        }).catch(err => {
            console.error(err);
        }))
}

// loading match details
export const getMatchDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${Api_key}&unique_id=${id}`.replace(/\s+/g, '');
    return (
        fetch(url)
        .then(res => { return res.json() })
        .catch(err => console.error(err))
    )
}