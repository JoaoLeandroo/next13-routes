import './header.css'
import Link from "next/link";

export default function Header() {
    return(
        <header>
            <h1>Logo</h1>
            
            <nav>
                <Link href="../../">Home</Link>
                <Link href="../../pages/User">User</Link>
                <Link href="../../pages/Contato">Contato</Link>
            </nav>
        </header>
    )
}