// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { METHODS } from "../../services/api";

// import { PATHS } from "../../constant";
// import { actions as userActions } from "../User/redux/action";
// import { hasOneFrom } from "../../common/utils";
// import "./styles.scss";

// const AuthenticatedHeaderOption = () => {
// const [partnerId, setPartnerId] = useState("");
// const dispatch = useDispatch();
// const user = useSelector(({ User }) => User);
// const rolesList = user.data.user.rolesList;

// const [open, setOpen] = useState(false);

// useEffect(() => {
//   axios({
//     method: METHODS.GET,
//     url: `${process.env.REACT_APP_MERAKI_URL}/users/me`,
//     headers: {
//       accept: "application/json",
//       Authorization: user.data.token,
//     },
//   }).then((res) => {
//     setPartnerId(res.data.user.partner_id);
//   });
// }, []);

// const partnerGroupId = user.data.user.partner_group_id;

// const canSpecifyPartnerGroupId =
//   hasOneFrom(rolesList, ["admin", "partner", "partner_view"]) &&
//   user.data.user.partner_group_id;

// const canSpecifyUserBaseRole = rolesList.indexOf("admin") > -1;

// const canSpecifyPartner =
//   hasOneFrom(rolesList, ["partner", "partner_view", "partner_edit"]) &&
//   partnerId != null;

//   return (
//     <>
// {canSpecifyUserBaseRole ? (
//   <>
//     <a className="item" href={PATHS.USER}>
//       User
//     </a>

//     <a className="item" href={PATHS.VOLUNTEER}>
//       Volunteers
//     </a>
//     <a className="item" href={PATHS.PARTNERS}>
//       Partners
//     </a>
//   </>
// ) : null}

// {canSpecifyPartnerGroupId || canSpecifyPartner ? (
//   <>
//     <a
//       className="item"
//       href={
//         canSpecifyPartnerGroupId
//           ? `${PATHS.STATE}/${partnerGroupId}`
//           : `${PATHS.PARTNERS}/${partnerId}`
//       }
//     >
//       Dashboard
//     </a>
//   </>
// ) : null}

// {["ADMISSION", "COURSE", "MENTOR", "CLASS", "OPPORTUNITIES", "AFE"].map(
//   (item) => (
//     <MenuOption
//       item={item}
//       className={
//         ["COURSE", "MENTOR", "CLASS"].includes(item)
//           ? "left-item"
//           : "item"
//       }
//     />
//   )
// )}

// <a>
//   <i
//     class="fa fa-user-circle-o profile-icon"
//     onClick={() => setOpen(!open)}
//   ></i>
// </a>
// {open && (
//   <div className="dropdown-wrapper">
//     <ul className="dropdown-menu">
//       <li className="dropdown-menu__item">
//         <a className="item" href={PATHS.PROFILE}>
//           Profile
//         </a>
//       </li>
//       <li className="dropdown-menu__item">
//         <a
//           className="logout-btn"
//           onClick={() => dispatch(userActions.logout())}
//         >
//           {" "}
//           Logout
//         </a>
//       </li>
//     </ul>
//   </div>
// )}
//     </>
//   );
// };

// const AuthenticatedLeftHeaderOption = () => {
//   return (
//     <>
//       {["COURSE", "MENTOR", "CLASS"].map((item) => (
//         <MenuOption item={item} className="item" />
//       ))}
//     </>
//   );
// };

// const PublicMenuOption = () => {
//   return (
//     <>
//       <a className="item" href={PATHS.AFE}>
//         Amazon Partnership
//       </a>
//       <a className="item" href={PATHS.LOGIN}>
//         Login/Signup
//       </a>
//     </>
//   );
// };

// const PublicLeftMenuOption = () => {
//   return (
// <a className="item" href={PATHS.COURSE}>
//   Courses
// </a>
//   );
// };

// const MenuOption = (props) => {
//   const NAMES = {
//     COURSE: "Courses",
//     MENTOR: "Mentors",
//     CLASS: "Classes",
//     ADMISSION: "Admission",
//     OPPORTUNITIES: "Opportunities",
//     AFE: "Amazon Partnership",
//   };
//   return (
//     <a className={props.className} href={PATHS[props.item]}>
//       {NAMES[props.item]}
//     </a>
//   );
// };

// function Header() {
// const { data } = useSelector(({ User }) => User);
// const isAuthenticated = data && data.isAuthenticated;

//   return (
//     <div className="ng-header ">
//       <input type="checkbox" id="nav-check" />
//       <div className="logo">
//         <a href="/">
//           <div className="meraki-logo" />
//         </a>

//         <div className="option">
//           {isAuthenticated ? (
//             <AuthenticatedLeftHeaderOption />
//           ) : (
//             <PublicLeftMenuOption />
//           )}
//         </div>
//       </div>

// <div className="dropDown-btn">
//   <label htmlFor="nav-check">
//     <span></span>
//     <span></span>
//     <span></span>
//   </label>
// </div>

//       <div className="option">
//         {isAuthenticated ? <AuthenticatedHeaderOption /> : <PublicMenuOption />}
//       </div>
//     </div>
//   );
// }

// export default Header;

// import React, { useState, useEffect } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import theme from "../../theme/theme";
// import python from "./asset/python.svg";
// import typing from "./asset/typing.svg";
// import web from "./asset/web.svg";
// import language from "./asset/language.svg";
// import softSkills from "./asset/softSkills.svg";
// import random from "./asset/random.svg";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { PATHS } from "../../constant";
// import axios from "axios";
// import { METHODS } from "../../services/api";
// import { hasOneFrom } from "../../common/utils";
// import { actions as userActions } from "../User/redux/action";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import useStyles from "./styles";
// import "./styles.scss";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   Container,
//   Avatar,
//   Button,
//   MenuItem,
//   ThemeProvider,
// } from "@mui/material";

// const students = {
//   // image: [
//   //   "./asset/python.svg",
//   //   "./asset/typing.svg",
//   //   "./asset/web.svg",
//   //   "./asset/language.svg",
//   //   "./asset/softSkills.svg",
//   //   "./asset/random.svg",
//   // ],
//   image: [python, typing, web, language, softSkills, random],
//   Learn: [
//     "Python",
//     "Typing Guru",
//     "JavaScript",
//     "English",
//     "Soft Skills",
//     "Open Courses",
//   ],
//   About: ["Meraki Team", "Alumni"],
//   GetInvolved: ["Become a Partner", "Become a Volunteer", "Donate", "Careers"],
// };

// const DropDown = ({ dropDown, indicator, handleClose }) => {
//   return (
//     <Menu
//       sx={{ mt: "45px" }}
//       id="menu-appbar"
//       anchorEl={indicator}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={Boolean(indicator)}
//       onClose={handleClose}
//     >
//       {console.log(students[dropDown])}
//       {students[dropDown].map((menu, index) => (
//         <MenuItem key={menu} onClick={handleClose}>
//           {dropDown === "Learn" && (
//             <img src={students.image[index]} loading="lazy" />
//           )}
//           <Typography textAlign="center">{menu}</Typography>
//         </MenuItem>
//       ))}
//     </Menu>
//   );
// };

// const AuthenticatedHeaderOption = () => {
//   const [partnerId, setPartnerId] = useState("");
//   const [profile, setProfile] = useState("");
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [learn, setLearn] = React.useState(null);
//   const dispatch = useDispatch();
//   const user = useSelector(({ User }) => User);
//   const rolesList = user.data.user.rolesList;
//   const classes = useStyles();

//   useEffect(() => {
//     axios({
//       method: METHODS.GET,
//       url: `${process.env.REACT_APP_MERAKI_URL}/users/me`,
//       headers: {
//         accept: "application/json",
//         Authorization: user.data.token,
//       },
//     }).then((res) => {
//       setPartnerId(res.data.user.partner_id);
//       setProfile(res.data.user.profile_picture);
//     });
//   }, []);

//   const partnerGroupId = user.data.user.partner_group_id;

//   const canSpecifyPartnerGroupId =
//     hasOneFrom(rolesList, ["admin", "partner", "partner_view"]) &&
//     user.data.user.partner_group_id;

//   const canSpecifyUserBaseRole = rolesList.indexOf("admin") > -1; //student

//   const merakiStudents = rolesList.indexOf("student") > -1; //admin

//   const canSpecifyPartner =
//     hasOneFrom(rolesList, ["partner", "partner_view", "partner_edit"]) &&
//     partnerId != null;

//   const handleOpenLearn = (event) => {
//     console.log("event.currentTarget", event.currentTarget);
//     setLearn(event.currentTarget);
//   };

//   const handleCloseLearn = () => {
//     setLearn(null);
//   };

//   const handleOpenUserMenu = (event) => {
//     console.log("event.currentTarget.........", event.currentTarget);
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <>
//       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//         {merakiStudents && (
//           <>
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//               <MenuItem
//                 onClick={handleOpenLearn}
//                 sx={{ my: 2, color: "black" }}
//               >
//                 Learn
//                 <ArrowDropDownIcon />
//               </MenuItem>
//               <DropDown
//                 dropDown="Learn"
//                 indicator={learn}
//                 handleClose={handleCloseLearn}
//               />
//             </Box>
//             <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
//               <MenuItem>
//                 <Link to={PATHS.ADMISSION} className={classes.link}>
//                   Admission
//                 </Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link to={PATHS.OPPORTUNITIES} className={classes.link}>
//                   Opportunity
//                 </Link>
//               </MenuItem>
//             </Box>
//           </>
//         )}
//         {canSpecifyUserBaseRole ? (
//           <>
//             <MenuItem>
//               <Link to={PATHS.USER} className={classes.link}>
//                 Students
//               </Link>
//             </MenuItem>
//             <MenuItem>
//               <Link to={PATHS.VOLUNTEER} className={classes.link}>
//                 Volunteers
//               </Link>
//             </MenuItem>
//             <MenuItem>
//               <Link to={PATHS.PARTNERS} className={classes.link}>
//                 Partners
//               </Link>
//             </MenuItem>
//           </>
//         ) : null}

//         {canSpecifyPartnerGroupId || canSpecifyPartner ? (
//           <MenuItem>
//             <Link
//               to={
//                 canSpecifyPartnerGroupId
//                   ? `${PATHS.STATE}/${partnerGroupId}`
//                   : `${PATHS.PARTNERS}/${partnerId}`
//               }
//               className={classes.link}
//             >
//               Dashboard
//             </Link>
//           </MenuItem>
//         ) : null}
//       </Box>

//       <Box sx={{ flexGrow: 0 }}>
//         <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//           <Avatar alt="Remy Sharp" src={profile} />
//         </IconButton>
//         <Menu
//           sx={{ mt: "45px" }}
//           id="menu-appbar"
//           anchorEl={anchorElUser}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           open={Boolean(anchorElUser)}
//           onClose={handleCloseUserMenu}
//         >
//           <MenuItem onClick={handleCloseUserMenu}>
//             <Link to={PATHS.PROFILE} className={classes.link}>
//               <Typography textAlign="center">Profile</Typography>
//             </Link>
//           </MenuItem>
//           <MenuItem onClick={handleCloseUserMenu}>
//             <Link
//               onClick={() => dispatch(userActions.logout())}
//               className={classes.link}
//             >
//               <Typography textAlign="center">Logout</Typography>
//             </Link>
//           </MenuItem>
//         </Menu>
//       </Box>
//     </>
//   );
// };

// const PublicMenuOption = () => {
//   const [first, setFirst] = React.useState(null);
//   const [second, setSecond] = React.useState(null);
//   const [third, setThird] = React.useState(null);

//   const handleOpenFirst = (event) => {
//     console.log("event.currentTarget", event.currentTarget);
//     setFirst(event.currentTarget);
//   };

//   const handleOpenSecond = (event) => {
//     console.log("event.currentTarget", event.currentTarget);
//     setSecond(event.currentTarget);
//   };

//   const handleOpenThird = (event) => {
//     console.log("event.currentTarget", event.currentTarget);
//     setThird(event.currentTarget);
//   };

//   const handleCloseFirst = () => {
//     setFirst(null);
//   };

//   const handleCloseSecond = () => {
//     setSecond(null);
//   };

//   const handleCloseThird = () => {
//     setThird(null);
//   };

//   return (
//     <>
//       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//         <MenuItem onClick={handleOpenFirst} sx={{ my: 2, color: "black" }}>
//           Learn
//           <ArrowDropDownIcon />
//         </MenuItem>
//         <DropDown
//           dropDown="Learn"
//           indicator={first}
//           handleClose={handleCloseFirst}
//         />
//         <MenuItem onClick={handleOpenSecond} sx={{ my: 2, color: "black" }}>
//           About
//           <ArrowDropDownIcon />
//         </MenuItem>
//         <DropDown
//           dropDown="About"
//           indicator={second}
//           handleClose={handleCloseSecond}
//         />
//         <MenuItem onClick={handleOpenThird} sx={{ my: 2, color: "black" }}>
//           Get Involved
//           <ArrowDropDownIcon />
//         </MenuItem>
//         <DropDown
//           dropDown="GetInvolved"
//           indicator={third}
//           handleClose={handleCloseThird}
//         />
//       </Box>
//       <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
//         <Button variant="contained">
//           <Link
//             className="item"
//             to={PATHS.LOGIN}
//             style={{ textDecoration: "none", color: "white" }}
//           >
//             Login
//           </Link>
//           {/* <Typography textAlign="center">Login</Typography> */}
//         </Button>
//       </Box>
//     </>
//   );
// };

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const { data } = useSelector(({ User }) => User);
//   const isAuthenticated = data && data.isAuthenticated;

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <AppBar position="static" color="default">
//         <Container maxWidth="false">
//           <Toolbar disableGutters>
//             <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {Object.keys(students).map((heading, index) => (
//                   <MenuItem key={index} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{heading}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <Link to="/">
//                 <img src={require("./asset/logo.svg")} loading="lazy" />
//               </Link>
//             </Box>
//             <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
//               <Link to="/">
//                 <img src={require("./asset/meraki.svg")} loading="lazy" />
//               </Link>
//             </Box>

//             {isAuthenticated ? (
//               <AuthenticatedHeaderOption />
//             ) : (
//               <>
//                 <PublicMenuOption />
//                 <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
//                   <Button variant="contained">
//                     <Link
//                       className="item"
//                       to={PATHS.LOGIN}
//                       style={{ textDecoration: "none", color: "white" }}
//                     >
//                       Login
//                     </Link>
//                   </Button>
//                 </Box>
//               </>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ThemeProvider>
//   );
// }

// export default Header;

// import React, { useState, useEffect } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import theme from "../../theme/theme";
// import python from "./asset/python.svg";
// import typing from "./asset/typing.svg";
// import web from "./asset/web.svg";
// import language from "./asset/language.svg";
// import softSkills from "./asset/softSkills.svg";
// import random from "./asset/random.svg";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { PATHS } from "../../constant";
// import axios from "axios";
// import { METHODS } from "../../services/api";
// import { hasOneFrom } from "../../common/utils";
// import { actions as userActions } from "../User/redux/action";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import useStyles from "./styles";
// import "./styles.scss";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import SwipeableDrawer from "@mui/material/SwipeableDrawer";

// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   Container,
//   Avatar,
//   Button,
//   MenuItem,
//   ThemeProvider,
// } from "@mui/material";

// const students = {
//   // image: [
//   //   "./asset/python.svg",
//   //   "./asset/typing.svg",
//   //   "./asset/web.svg",
//   //   "./asset/language.svg",
//   //   "./asset/softSkills.svg",
//   //   "./asset/random.svg",
//   // ],
//   image: [python, typing, web, language, softSkills, random],
//   Learn: [
//     "Python",
//     "Typing Guru",
//     "JavaScript",
//     "English",
//     "Soft Skills",
//     "Open Courses",
//   ],
//   About: ["Meraki Team", "Alumni"],
//   GetInvolved: ["Become a Partner", "Become a Volunteer", "Donate", "Careers"],
// };

// const DropDown = ({ dropDown, indicator, handleClose }) => {
//   return (
//     <Menu
//       sx={{ mt: "45px" }}
//       id="menu-appbar"
//       anchorEl={indicator}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={Boolean(indicator)}
//       onClose={handleClose}
//     >
//       {console.log(students[dropDown])}
//       {students[dropDown].map((menu, index) => (
//         <>
//           <MenuItem key={menu} onClick={handleClose}>
//             {dropDown === "Learn" && (
//               <img src={students.image[index]} loading="lazy" />
//             )}
//             <Typography textAlign="center">{menu}</Typography>
//           </MenuItem>
//           {dropDown === "Learn" && index == 4 && <Divider />}
//         </>
//       ))}
//     </Menu>
//   );
// };

// const AuthenticatedHeaderOption = ({ toggleDrawer, leftDrawer }) => {
//   const [partnerId, setPartnerId] = useState("");
//   const [profile, setProfile] = useState("");
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [learn, setLearn] = React.useState(null);
//   const dispatch = useDispatch();
//   const user = useSelector(({ User }) => User);
//   const rolesList = user.data.user.rolesList;
//   const classes = useStyles();

//   useEffect(() => {
//     axios({
//       method: METHODS.GET,
//       url: `${process.env.REACT_APP_MERAKI_URL}/users/me`,
//       headers: {
//         accept: "application/json",
//         Authorization: user.data.token,
//       },
//     }).then((res) => {
//       setPartnerId(res.data.user.partner_id);
//       setProfile(res.data.user.profile_picture);
//     });
//   }, []);

//   const partnerGroupId = user.data.user.partner_group_id;

//   const canSpecifyPartnerGroupId =
//     hasOneFrom(rolesList, ["admin", "partner", "partner_view"]) &&
//     user.data.user.partner_group_id;

//   const canSpecifyUserBaseRole = rolesList.indexOf("student") > -1; //student

//   const merakiStudents = rolesList.indexOf("admin") > -1; //admin

//   const canSpecifyPartner =
//     hasOneFrom(rolesList, ["partner", "partner_view", "partner_edit"]) &&
//     partnerId != null;

//   const handleOpenLearn = (event) => {
//     console.log("event.currentTarget", event.currentTarget);
//     setLearn(event.currentTarget);
//   };

//   const handleCloseLearn = () => {
//     setLearn(null);
//   };

//   const handleOpenUserMenu = (event) => {
//     console.log("event.currentTarget.........", event.currentTarget);
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   console.log("toggleDrawer", toggleDrawer);

//   return (
//     <>
//       <Box
//         sx={{
//           flexGrow: 1,
//           display: {
//             xs: leftDrawer ? "block" : "none",
//             md: leftDrawer ? "none" : "flex",
//           },
//         }}
//       >
//         {merakiStudents && (
//           <>
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: {
//                   xs: leftDrawer ? "block" : "none",
//                   md: leftDrawer ? "none" : "flex",
//                 },
//               }}
//             >
//               <MenuItem
//                 onClick={handleOpenLearn}
//                 sx={{ my: 2, color: "black" }}
//               >
//                 Learn
//                 <ExpandMoreIcon />
//               </MenuItem>
//               <DropDown
//                 dropDown="Learn"
//                 indicator={learn}
//                 handleClose={handleCloseLearn}
//               />
//             </Box>
//             <Box
//               sx={{
//                 flexGrow: 0,
//                 display: {
//                   xs: leftDrawer ? "block" : "none",
//                   md: leftDrawer ? "none" : "flex",
//                 },
//               }}
//             >
//               <MenuItem>
//                 <Link
//                   to={PATHS.ADMISSION}
//                   className={classes.link}
//                   onClick={toggleDrawer && toggleDrawer(false)}
//                 >
//                   Admission
//                 </Link>
//               </MenuItem>
//               <MenuItem>
//                 <Link
//                   to={PATHS.OPPORTUNITIES}
//                   className={classes.link}
//                   onClick={toggleDrawer && toggleDrawer(false)}
//                 >
//                   Opportunity
//                 </Link>
//               </MenuItem>
//             </Box>
//           </>
//         )}
//         {canSpecifyUserBaseRole ? (
//           <>
//             <MenuItem onClick={toggleDrawer && toggleDrawer(false)}>
//               <Link to={PATHS.USER} className={classes.link}>
//                 Students
//               </Link>
//             </MenuItem>
//             <MenuItem>
//               <Link
//                 to={PATHS.VOLUNTEER}
//                 className={classes.link}
//                 onClick={toggleDrawer && toggleDrawer(false)}
//               >
//                 Volunteers
//               </Link>
//             </MenuItem>
//             <MenuItem>
//               <Link
//                 to={PATHS.PARTNERS}
//                 className={classes.link}
//                 onClick={toggleDrawer && toggleDrawer(false)}
//               >
//                 Partners
//               </Link>
//             </MenuItem>
//           </>
//         ) : null}

//         {canSpecifyPartnerGroupId || canSpecifyPartner ? (
//           <MenuItem>
//             <Link
//               to={
//                 canSpecifyPartnerGroupId
//                   ? `${PATHS.STATE}/${partnerGroupId}`
//                   : `${PATHS.PARTNERS}/${partnerId}`
//               }
//               className={classes.link}
//               onClick={toggleDrawer && toggleDrawer(false)}
//             >
//               Dashboard
//             </Link>
//           </MenuItem>
//         ) : null}
//       </Box>

//       {!leftDrawer && (
//         <Box sx={{ flexGrow: 0 }}>
//           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//             <Avatar alt="Remy Sharp" src={profile} />
//           </IconButton>
//           <Menu
//             sx={{ mt: "45px" }}
//             id="menu-appbar"
//             anchorEl={anchorElUser}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             open={Boolean(anchorElUser)}
//             onClose={handleCloseUserMenu}
//           >
//             <MenuItem onClick={handleCloseUserMenu}>
//               <Link to={PATHS.PROFILE} className={classes.link}>
//                 <Typography textAlign="center">Profile</Typography>
//               </Link>
//             </MenuItem>
//             <MenuItem onClick={handleCloseUserMenu}>
//               <Link
//                 onClick={() => dispatch(userActions.logout())}
//                 className={classes.link}
//               >
//                 <Typography textAlign="center">Logout</Typography>
//               </Link>
//             </MenuItem>
//           </Menu>
//         </Box>
//       )}
//     </>
//   );
// };

// const PublicMenuOption = ({ leftDrawer }) => {
//   const [first, setFirst] = React.useState(null);
//   const [second, setSecond] = React.useState(null);
//   const [third, setThird] = React.useState(null);

//   const handleOpenFirst = (event) => {
//     console.log("event.currentTarget", event.currentTarget);
//     setFirst(event.currentTarget);
//   };

//   const handleOpenSecond = (event) => {
//     console.log("event.currentTarget", event.currentTarget);
//     setSecond(event.currentTarget);
//   };

//   const handleOpenThird = (event) => {
//     console.log("event.currentTarget", event.currentTarget);
//     setThird(event.currentTarget);
//   };

//   const handleCloseFirst = () => {
//     setFirst(null);
//   };

//   const handleCloseSecond = () => {
//     setSecond(null);
//   };

//   const handleCloseThird = () => {
//     setThird(null);
//   };

//   console.log("leftDrawer in PublicMenuOption", leftDrawer);

//   return (
//     <>
//       <Box
//         sx={{
//           flexGrow: 1,
//           display: {
//             xs: leftDrawer ? "block" : "none",
//             md: leftDrawer ? "none" : "flex",
//           },
//         }}
//       >
//         <MenuItem onClick={handleOpenFirst} sx={{ my: 2, color: "black" }}>
//           Learn
//           {first ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           {/* <ExpandMoreIcon /> */}
//         </MenuItem>
//         <DropDown
//           dropDown="Learn"
//           indicator={first}
//           handleClose={handleCloseFirst}
//         />
//         <MenuItem onClick={handleOpenSecond} sx={{ my: 2, color: "black" }}>
//           About
//           {second ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           {/* <ExpandMoreIcon /> */}
//         </MenuItem>
//         <DropDown
//           dropDown="About"
//           indicator={second}
//           handleClose={handleCloseSecond}
//         />
//         <MenuItem onClick={handleOpenThird} sx={{ my: 2, color: "black" }}>
//           Get Involved
//           {third ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           {/* <ExpandMoreIcon /> */}
//         </MenuItem>
//         <DropDown
//           dropDown="GetInvolved"
//           indicator={third}
//           handleClose={handleCloseThird}
//         />
//       </Box>
//       {!leftDrawer && (
//         <Box sx={{ flexGrow: 0 }}>
//           <Button variant="contained">
//             <Link
//               className="item"
//               to={PATHS.LOGIN}
//               style={{ textDecoration: "none", color: "white" }}
//             >
//               Login
//             </Link>
//             {/* <Typography textAlign="center">Login</Typography> */}
//           </Button>
//         </Box>
//       )}
//     </>
//   );
// };

// const MobileVersion = ({ toggleDrawer, leftDrawer }) => {
//   const { data } = useSelector(({ User }) => User);
//   const isAuthenticated = data && data.isAuthenticated;

//   console.log("leftDrawer in MobileVersion", leftDrawer);
//   console.log("toggleDrawer in MobileVersion", toggleDrawer);
//   return (
//     <Box
//       sx={{ width: 350 }}
//       role="presentation"
//       onClose={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {isAuthenticated ? (
//           <AuthenticatedHeaderOption
//             toggleDrawer={toggleDrawer}
//             leftDrawer={leftDrawer}
//           />
//         ) : (
//           <PublicMenuOption leftDrawer={leftDrawer} />
//         )}
//       </List>
//     </Box>
//   );
// };

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const { data } = useSelector(({ User }) => User);
//   const isAuthenticated = data && data.isAuthenticated;
//   const [leftDrawer, setLeftDrawer] = React.useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setLeftDrawer(open);
//   };

//   console.log("leftDrawer", leftDrawer);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <AppBar position="static" color="default">
//         <Container maxWidth="false">
//           <Toolbar disableGutters>
//             <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 color="inherit"
//                 onClick={toggleDrawer(true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <SwipeableDrawer
//                 anchor="left"
//                 open={leftDrawer}
//                 onClose={toggleDrawer(false)}
//                 onOpen={toggleDrawer(true)}
//               >
//                 <MobileVersion
//                   toggleDrawer={toggleDrawer}
//                   leftDrawer={leftDrawer}
//                 />
//               </SwipeableDrawer>

//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {Object.keys(students).map((heading, index) => (
//                   <MenuItem key={index} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{heading}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <Link to="/">
//                 <img src={require("./asset/logo.svg")} loading="lazy" />
//               </Link>
//             </Box>
//             <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
//               <Link to="/">
//                 <img src={require("./asset/meraki.svg")} loading="lazy" />
//               </Link>
//             </Box>

//             {isAuthenticated ? (
//               <AuthenticatedHeaderOption />
//             ) : (
//               <>
//                 <PublicMenuOption />
//               </>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ThemeProvider>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../theme/theme";
import python from "./asset/python.svg";
import typing from "./asset/typing.svg";
import web from "./asset/web.svg";
import language from "./asset/language.svg";
import softSkills from "./asset/softSkills.svg";
import random from "./asset/random.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PATHS } from "../../constant";
import axios from "axios";
import { METHODS } from "../../services/api";
import { hasOneFrom } from "../../common/utils";
import { actions as userActions } from "../User/redux/action";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "./styles";
import "./styles.scss";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import {
  AppBar,
  CardMedia,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
  ThemeProvider,
} from "@mui/material";

const students = {
  // image: [
  //   "./asset/python.svg",
  //   "./asset/typing.svg",
  //   "./asset/web.svg",
  //   "./asset/language.svg",
  //   "./asset/softSkills.svg",
  //   "./asset/random.svg",
  // ],
  image: [python, typing, web, language, softSkills, random],
  Learn: [
    "Python",
    "Typing Guru",
    "JavaScript",
    "English",
    "Soft Skills",
    "Open Courses",
  ],
  About: ["Meraki Team", "Alumni"],
  GetInvolved: ["Become a Partner", "Become a Volunteer", "Donate", "Careers"],
};

const DropDown = ({ dropDown, indicator, handleClose, toggleDrawer }) => {
  const classes = useStyles();
  return (
    // <Box sx={{ bgcolor: "background.default" }}>
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={indicator}
      anchorOrigin={{
        vertical: "top",
        // horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(indicator)}
      onClose={handleClose}
      // bgcolor="primary.light"
    >
      {dropDown &&
        students[dropDown].map((menu, index) => (
          <>
            <Link
              to={PATHS.COURSE}
              className={classes.link}
              onClick={toggleDrawer && toggleDrawer(false)}
            >
              <MenuItem key={menu} onClick={handleClose}>
                {dropDown === "Learn" && (
                  <CardMedia
                    image={students.image[index]}
                    loading="lazy"
                    sx={{ padding: "15px" }}
                  />
                )}
                <Typography textAlign="center">{menu}</Typography>
              </MenuItem>
            </Link>

            {dropDown === "Learn" && index == 4 && <Divider />}
          </>
        ))}
    </Menu>
    // </Box>
  );
};

const MobileDropDown = () => {
  const [responsive, setResponsive] = useState(false);
  const [optionItem, setOptionItem] = useState({
    explore: false,
    about: false,
    language: false,
  });
  return (
    <>
      <a
        className="hamburger-menu"
        onClick={() => {
          setResponsive(!responsive);
        }}
      ></a>
      <div
        className="ng-header-options"
        style={
          responsive
            ? { height: "auto", padding: "30px 20px", overflow: "auto" }
            : {}
        }
      >
        <a
          className="options-item"
          onClick={() => {
            setOptionItem({ ...optionItem, explore: !optionItem.explore });
          }}
        >
          Explore
        </a>
        <span
          className="options-item-options"
          style={optionItem.explore ? { height: "auto", overflow: "auto" } : {}}
        >
          <ul>
            <li>Python</li>
            <li>Typing Guru</li>
            <li>Spoken English</li>
            <li>Javascript</li>
            <li>Soft Skills</li>
            <li>Open Courses</li>
          </ul>
        </span>
        <a
          className="options-item"
          onClick={() => {
            setOptionItem({ ...optionItem, about: !optionItem.about });
          }}
        >
          About
        </a>
        <span
          className="options-item-options"
          style={optionItem.about ? { height: "auto", overflow: "auto" } : {}}
        >
          <ul>
            <li>Meraki Team</li>
            <li>Alumini</li>
            <li>Blog</li>
          </ul>
        </span>
      </div>
    </>
  );
};

const AuthenticatedHeaderOption = ({ toggleDrawer, leftDrawer }) => {
  const [partnerId, setPartnerId] = useState("");
  const [profile, setProfile] = useState("");
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [learn, setLearn] = React.useState(null);
  const dispatch = useDispatch();
  const user = useSelector(({ User }) => User);
  const rolesList = user.data.user.rolesList;
  const classes = useStyles();

  useEffect(() => {
    axios({
      method: METHODS.GET,
      url: `${process.env.REACT_APP_MERAKI_URL}/users/me`,
      headers: {
        accept: "application/json",
        Authorization: user.data.token,
      },
    }).then((res) => {
      setPartnerId(res.data.user.partner_id);
      setProfile(res.data.user.profile_picture);
    });
  }, []);

  const partnerGroupId = user.data.user.partner_group_id;

  const canSpecifyPartnerGroupId =
    hasOneFrom(rolesList, ["admin", "partner", "partner_view"]) &&
    user.data.user.partner_group_id;

  const canSpecifyUserBaseRole = rolesList.indexOf("student") > -1; //student

  const merakiStudents = rolesList.indexOf("admin") > -1; //admin

  const canSpecifyPartner =
    hasOneFrom(rolesList, ["partner", "partner_view", "partner_edit"]) &&
    partnerId != null;

  const handleOpenLearn = (event) => {
    setLearn(event.currentTarget);
  };

  const handleCloseLearn = () => {
    setLearn(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: leftDrawer ? "block" : "none",
            md: leftDrawer ? "none" : "flex",
          },
        }}
      >
        {merakiStudents && (
          <>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: leftDrawer ? "block" : "none",
                  md: leftDrawer ? "none" : "flex",
                },
              }}
            >
              <MenuItem
                onClick={handleOpenLearn}
                sx={{ my: 2, color: "black" }}
              >
                Learn
                <ExpandMoreIcon />
              </MenuItem>
              <DropDown
                dropDown="Learn"
                indicator={learn}
                handleClose={handleCloseLearn}
                toggleDrawer={toggleDrawer}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 0,
                display: {
                  xs: leftDrawer ? "block" : "none",
                  md: leftDrawer ? "none" : "flex",
                },
              }}
            >
              <MenuItem onClick={toggleDrawer && toggleDrawer(false)}>
                <Link to={PATHS.ADMISSION} className={classes.link}>
                  Admission
                </Link>
              </MenuItem>
              <MenuItem onClick={toggleDrawer && toggleDrawer(false)}>
                <Link to={PATHS.OPPORTUNITIES} className={classes.link}>
                  Opportunity
                </Link>
              </MenuItem>
            </Box>
          </>
        )}
        {canSpecifyUserBaseRole ? (
          <>
            <MenuItem onClick={toggleDrawer && toggleDrawer(false)}>
              <Link to={PATHS.USER} className={classes.link}>
                Students
              </Link>
            </MenuItem>
            <MenuItem onClick={toggleDrawer && toggleDrawer(false)}>
              <Link to={PATHS.VOLUNTEER} className={classes.link}>
                Volunteers
              </Link>
            </MenuItem>
            <MenuItem onClick={toggleDrawer && toggleDrawer(false)}>
              <Link to={PATHS.PARTNERS} className={classes.link}>
                Partners
              </Link>
            </MenuItem>
          </>
        ) : null}

        {canSpecifyPartnerGroupId || canSpecifyPartner ? (
          <MenuItem onClick={toggleDrawer && toggleDrawer(false)}>
            <Link
              to={
                canSpecifyPartnerGroupId
                  ? `${PATHS.STATE}/${partnerGroupId}`
                  : `${PATHS.PARTNERS}/${partnerId}`
              }
              className={classes.link}
            >
              Dashboard
            </Link>
          </MenuItem>
        ) : null}
      </Box>

      {!leftDrawer && (
        <Box sx={{ flexGrow: 0 }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src={profile} />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Link to={PATHS.PROFILE} className={classes.link}>
                <Typography textAlign="center">Profile</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link
                onClick={() => dispatch(userActions.logout())}
                className={classes.link}
              >
                <Typography textAlign="center">Logout</Typography>
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
};

const PublicMenuOption = ({ leftDrawer, toggleDrawer }) => {
  const [indicator, setIndicator] = React.useState(null);
  const [dropDownMenu, setDropDownMenu] = React.useState(null);
  const [selectedMenu, SetSelectedMenu] = React.useState(null);

  const menuOpenHandler = (event, menu) => {
    setIndicator(event.currentTarget);
    setDropDownMenu(menu.split(" ").join(""));
    SetSelectedMenu(menu);
  };

  const menuCloseHandler = () => {
    setIndicator(null);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: leftDrawer ? "block" : "none",
            md: leftDrawer ? "none" : "flex",
          },
        }}
      >
        {["Learn", "About", "Get Involved"].map((menu) => (
          <>
            <MenuItem
              onClick={(e) => {
                menuOpenHandler(e, menu);
              }}
              sx={{ my: 2, color: "black" }}
            >
              {menu}
              {selectedMenu === menu && indicator ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </MenuItem>
            {/* <MobileDropDown /> */}
            <DropDown
              dropDown={dropDownMenu}
              indicator={indicator}
              handleClose={menuCloseHandler}
              toggleDrawer={toggleDrawer}
            />
          </>
        ))}
      </Box>
      {!leftDrawer && (
        <Box sx={{ flexGrow: 0 }}>
          <Button variant="contained">
            <Link
              className="item"
              to={PATHS.LOGIN}
              style={{ textDecoration: "none", color: "white" }}
            >
              Log in
            </Link>
            {/* <Typography textAlign="center">Login</Typography> */}
          </Button>
        </Box>
      )}
    </>
  );
};

const MobileVersion = ({ toggleDrawer, leftDrawer }) => {
  const { data } = useSelector(({ User }) => User);
  const isAuthenticated = data && data.isAuthenticated;
  const classes = useStyles();
  return (
    <Box
      className={classes.mobileBox}
      role="presentation"
      onClose={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      bgcolor="primary.light"
    >
      <Box className={classes.box} onClick={toggleDrawer(false)}>
        <Toolbar disableGutters>
          <Box className={classes.RightBox}>
            <Link to="/">
              <img src={require("./asset/logo.svg")} loading="lazy" />
            </Link>
          </Box>
          <Box className={classes.crossIcon}>
            <CloseIcon />
          </Box>
        </Toolbar>
      </Box>
      <List>
        {isAuthenticated ? (
          <AuthenticatedHeaderOption
            toggleDrawer={toggleDrawer}
            leftDrawer={leftDrawer}
          />
        ) : (
          <PublicMenuOption
            toggleDrawer={toggleDrawer}
            leftDrawer={leftDrawer}
          />
        )}
      </List>
    </Box>
  );
};

function Header() {
  const { data } = useSelector(({ User }) => User);
  const isAuthenticated = data && data.isAuthenticated;
  const [leftDrawer, setLeftDrawer] = React.useState(false);
  const classes = useStyles();
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setLeftDrawer(open);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <AppBar position="static" color="default"> */}
      <Container maxWidth="false">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={leftDrawer}
              onClose={toggleDrawer(false)} //Will let you close the side menu on clicking on the side
              onOpen={toggleDrawer(true)}
            >
              <MobileVersion
                toggleDrawer={toggleDrawer}
                leftDrawer={leftDrawer}
              />
            </SwipeableDrawer>
          </Box>
          <Box
            // className={classes.meraki}
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link to="/">
              <img src={require("./asset/logo.svg")} loading="lazy" />
            </Link>
          </Box>
          <Box
            // className={classes.merakiLearn}
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/">
              <img src={require("./asset/meraki.svg")} loading="lazy" />
            </Link>
          </Box>

          {isAuthenticated ? (
            <AuthenticatedHeaderOption />
          ) : (
            <>
              <PublicMenuOption />
            </>
          )}
        </Toolbar>
      </Container>
      {/* </AppBar> */}
    </ThemeProvider>
  );
}

export default Header;
