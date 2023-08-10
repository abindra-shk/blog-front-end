import logo from '../../assets/bloglogo.png'
export const Logo = (props: { height: number }) => {
    return (
        <div className="logo">
            <img src={logo} alt={'Logo'} height={props.height} />
        </div>
    )
}
