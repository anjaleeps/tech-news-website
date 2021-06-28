import Link from "next/link";

const NewsCard = ({post}) => {
    return (
        <>
            <div className="card">
                <div className="content">
                    <Link href={post.url}>
                        <a><h4>{post.title}</h4></a>
                    </Link>
                    <div className="extra">
                        <div className="info"><span>{post.created_at.split("T")[0]}</span></div>
                        <div className="info">comments: <span>{post.num_comments}</span></div>
                        <div className="info"><span>by {post.author}</span></div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .card {
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    padding: 15px 10px 10px 10px;
                    margin-bottom: 10px;
                }

                h4 {
                    margin: 0;
                    font-weight: normal;
                    font-size: 20px;
                }

                .extra {
                    margin: 13px 0 10px;
                }

                .info {
                    display: inline-block;
                    margin-right: 40px;
                    color: #abadb0;
                    font-size: 13px;
                }

                a {
                    color: #820f05;
                }

                a:visited {
                    color: #c2514f;
                }
            `}</style>
        </>
    )
}

export default NewsCard;