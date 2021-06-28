import Header from "../components/header";
import PostCard from "../components/newscard";

const HomePage = ({ data }) => (
    <div>
        <Header></Header>
        <div className="container">
            <h1>Latest Technology News</h1>
            {data.hits.map((post) => {
                {console.log(post)}
                if (post.url) {
                    return (
                        <PostCard post={post}></PostCard>
                    );       
                }   
            })}
        </div> 
        <style jsx>{`
            .container {
                margin: 20px 50px;
            }

            h1 {
                text-align: center;
            }
        `}</style>   
    </div>
);


export async function getServerSideProps() {
    const res = await fetch("https://hn.algolia.com/api/v1/search_by_date?query=tech&tags=story");
    const data = await res.json();
    return { props: { data } };
}

export default HomePage;