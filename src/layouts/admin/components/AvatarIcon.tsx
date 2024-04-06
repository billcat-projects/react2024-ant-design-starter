import { useRef } from "react";
import { Avatar, Modal, Menu, Dropdown, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PasswordModal from "./PasswordModal";
import InfoModal from "./InfoModal";
import avatar from "@/assets/images/avatar.png";
import { useAuth } from '@/hooks/useAuth.tsx'

const AvatarIcon = (props: any) => {
  const auth = useAuth();
	const navigate = useNavigate();

	interface ModalProps {
		showModal: (params: { name: number }) => void;
	}
	const passwdRef = useRef<ModalProps>(null);
	const infoRef = useRef<ModalProps>(null);

	// Log out
	const logout = () => {
		Modal.confirm({
			title: "Are you sure 🧡",
			icon: <ExclamationCircleOutlined />,
			content: "Are you sure you want to log out？",
			okText: "Confirm",
			cancelText: "Cancel",
			onOk: () => {
				auth.logout()
				message.success("Logout successfully！");
			}
		});
	};

	// Dropdown Menu
	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span className="dropdown-item">Home</span>,
					onClick: () => navigate("/dashboard")
				},
				{
					key: "2",
					label: <span className="dropdown-item">Profile</span>,
					onClick: () => infoRef.current!.showModal({ name: 11 })
				},
				{
					key: "3",
					label: <span className="dropdown-item">Password</span>,
					onClick: () => passwdRef.current!.showModal({ name: 11 })
				},
				{
					type: "divider"
				},
				{
					key: "4",
					label: <span className="dropdown-item">退出登录</span>,
					onClick: logout
				}
			]}
		></Menu>
	);
	return (
		<>
			<Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="large" src={avatar} />
			</Dropdown>
      <InfoModal innerRef={infoRef}></InfoModal>
      <PasswordModal innerRef={passwdRef}></PasswordModal>
		</>
	);
};
export default AvatarIcon
