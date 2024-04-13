const YoutubePlayer = ({uri}) => {
    return (
        <div className="shadow border p-2">
            <div className="ratio ratio-16x9">
                <iframe className="col-12"
                        src={uri}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default YoutubePlayer;