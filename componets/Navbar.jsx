import { Link } from 'next';

const Navbar = () => (
    <ul>
        <li>
            <Link href="/">
                <a>Home</a>
            </Link>
        </li>
        <li>
            <Link href="/about">
                <a>About</a>
            </Link>
        </li>
        <li>
            <Link href="">
                <a></a>
            </Link>
        </li>
        <li>
            <Link href="">
                <a></a>
            </Link>
        </li>
    </ul>
);