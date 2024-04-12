import styles from "./YoutubePlayer.module.css";

const YoutubePlayer = ({uri}) => {
    return (
        <div className={[styles.YoutubeVideoContainer, "shadow", "border", "p-2"].join(" ")}>
            <iframe className="col-12"
                    src={uri}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default YoutubePlayer;