import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Badge,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserSignIn, setIsUserSignIn] = useState(null);
  const menuItems = ["Home", "Products", "About", "Contact"];
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignIn(user || null);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-black text-inherit text-2xl cursor-pointer">
            <span className="text-blue-600">Sa</span>dny
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link aria-current="page">
            <NavLink color="foreground" to="/">
              Home
            </NavLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">
            <NavLink
              to={
                isUserSignIn && isUserSignIn.email === "admin@gmail.com"
                  ? "/add_product"
                  : "/products"
              }
            >
              {isUserSignIn && isUserSignIn.email === "admin@gmail.com"
                ? "Add Product"
                : "Products"}
            </NavLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">
            <NavLink
              to={
                isUserSignIn && isUserSignIn.email === "admin@gmail.com"
                  ? "/manage_product"
                  : "/about"
              }
            >
              {isUserSignIn && isUserSignIn.email === "admin@gmail.com"
                ? "Manage Orders"
                : "About"}
            </NavLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">
            <NavLink to="/contact">Contact</NavLink>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Cart icon and user avatar: always visible */}
      <NavbarContent className="flex gap-4" justify="end">
        <NavbarItem>
          {isUserSignIn && isUserSignIn.email === "admin@gmail.com" ? (
            ""
          ) : (
            <NavLink to="/cart">
          <p>Cart ({cart.length})</p>
            </NavLink>
          )}
        </NavbarItem>
        <NavbarItem>
          {isUserSignIn ? (
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">{isUserSignIn.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  onClick={handleSignOut}
                  key="logout"
                  color="danger"
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavLink to="/register">
              <Button className="w-full" color="primary" variant="shadow">
                Sign Up
              </Button>
            </NavLink>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" className="w-full" size="lg">
            <NavLink to="/">Home</NavLink>
          </Link>
        </NavbarMenuItem>
        <NavbarItem>
          <Link color="foreground">
            <NavLink
              to={
                isUserSignIn && isUserSignIn.email === "admin@gmail.com"
                  ? "/add_product"
                  : "/products"
              }
            >
              {isUserSignIn && isUserSignIn.email === "admin@gmail.com"
                ? "Add Product"
                : "Products"}
            </NavLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">
            <NavLink
              to={
                isUserSignIn && isUserSignIn.email === "admin@gmail.com"
                  ? "/manage_product"
                  : "/about"
              }
            >
              {isUserSignIn && isUserSignIn.email === "admin@gmail.com"
                ? "Manage Orders"
                : "About"}
            </NavLink>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">
            <NavLink to="/contact">Contact</NavLink>
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
