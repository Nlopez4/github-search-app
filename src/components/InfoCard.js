
function InfoCard({userData}) {
    return (
        <div>
            <p>Info</p>
            <p>{userData.avatar_url}</p>
            <p>{userData.name}</p>
            <p>{userData.created_at}</p>
        </div>
    )
}

export default InfoCard; 