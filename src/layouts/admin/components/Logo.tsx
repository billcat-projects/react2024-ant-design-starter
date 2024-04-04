import logo from "@/assets/images/billcat.png";

type LogoProps = {
  collapsed: boolean
}

const Logo = (props: LogoProps) => {
  const { collapsed } = props;
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" className="logo-img" />
      {!collapsed ? <h2 className="logo-text">Billcat Admin</h2> : null}
    </div>
  );
};

export default Logo;
