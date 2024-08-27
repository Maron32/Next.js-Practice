import { FC } from "react";
import Footer from "./footer";
import Header from "./header";

type Props={
    children: React.ReactNode;
};
/**
 * 共通レイアウトのコンポーネント
 * @param {ReactNode} children レイアウトに埋め込むJSX
 * @returns {JSX}
 */
const Layout:FC<Props> = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
 
export default Layout;