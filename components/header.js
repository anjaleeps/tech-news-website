import Link from "next/link";

const Header = () => (
    <div> 
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
        <style jsx>{`
            ul {
                display: flex;
                background: teal;
                list-style: none;
                color: #0000ef;
                margin: 0;
                padding: 20px 0 10px 0;
            }

            li {
                margin-left: 60px;
                font-size: 1.5rem;
            }

            a {
                color: white;
            }
        `}</style>
    </div>
)

export default Header;