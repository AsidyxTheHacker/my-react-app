function ProfilePicture() {
    const url = 'https://a.ltrbxd.com/resized/avatar/twitter/2/4/5/7/1/0/0/shard/http___pbs.twimg.com_profile_images_1654580302063321090_ojArxDEC-0-1000-0-1000-crop.jpg?v=94330facfc';

    const handleClick = (e) => e.target.style.display = 'none';

    return(
        <>
        <img onClick={(e) => handleClick(e)} src={url}/>
        </>
    );
};

export default ProfilePicture;