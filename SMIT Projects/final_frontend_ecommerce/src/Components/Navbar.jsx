import React, { useContext, useEffect } from "react";
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
  user,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserSignIn, setIsUserSignIn] = useState(null);

  const menuItems = ["Home", "Products", "About", "Contact"];

  let { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
        setIsUserSignIn(user);
      } else {
        console.log("Not Signed In");
        setIsUserSignIn(null);
      }
    });
  }, []);

  function handleSignOut() {
    signOut(auth);
  }

  return (
    <>
    {isUserSignIn && isUserSignIn.email === "admin@gmail.com" ? (
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
              <NavLink to="/add_product">Add Product</NavLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground">
              <NavLink to="/manage_product">Manage Orders</NavLink>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground">
              <NavLink to="/contact">Contact</NavLink>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
        
          <NavbarItem>
            {isUserSignIn ? (
              <div>
                {" "}
                <Dropdown placement="bottom-start">
                  <DropdownTrigger>
                    <User
                      as="button"
                      avatarProps={{
                        isBordered: true,
                        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                      }}
                      className="transition-transform"
                      // description="@tonyreichert"
                      // name="Tony Reichert"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-bold">Signed in as</p>
                      <p className="font-bold">{isUserSignIn.email}</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">
                      Team Settings
                    </DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">
                      Configurations
                    </DropdownItem>
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
              </div>
            ) : (
              <NavLink to="/register">
                <Button className="w-full" color="primary" variant="shadow">
                  Sign Up
                </Button>
              </NavLink>
            )}
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" className="w-full" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="flex gap-4">
            <NavLink to="/cart">
              <Badge
                content={cart.length ? cart.length : 0}
                className="text-sm"
                classNames="bg-blue-200"
                variant="solid"
              >
                <Button
                  isIconOnly
                  color="primary"
                  variant="flat"
                  aria-label="Like"
                >
                  <i class="ri-shopping-cart-fill text-lg"></i>
                </Button>
              </Badge>
            </NavLink>
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
                    <p className="font-bold">@tonyreichert</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">
                    Team Settings
                  </DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
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
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    ) : (
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
              <NavLink to="/about">About</NavLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground">
              <NavLink to="/products">Products</NavLink>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link color="foreground">
              <NavLink to="/contact">Contact</NavLink>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem className="hidden lg:flex">
            <NavLink to="/cart">
              <NavbarItem className="hidden lg:flex">
                <Badge
                  content={cart.length ? cart.length : 0}
                  className="text-sm"
                  classNames="bg-blue-200"
                  variant="solid"
                >
                  <Button
                    isIconOnly
                    color="primary"
                    variant="flat"
                    aria-label="Like"
                  >
                    <i class="ri-shopping-cart-fill text-lg"></i>
                  </Button>
                </Badge>
              </NavbarItem>
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            {isUserSignIn ? (
              <div>
                {" "}
                <Dropdown placement="bottom-start">
                  <DropdownTrigger>
                    <User
                      as="button"
                      avatarProps={{
                        isBordered: true,
                        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                      }}
                      className="transition-transform"
                      // description="@tonyreichert"
                      // name="Tony Reichert"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-bold">Signed in as</p>
                      <p className="font-bold">{isUserSignIn.email}</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">
                      Team Settings
                    </DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">
                      Configurations
                    </DropdownItem>
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
              </div>
            ) : (
              <NavLink to="/register">
                <Button className="w-full" color="primary" variant="shadow">
                  Sign Up
                </Button>
              </NavLink>
            )}
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" className="w-full" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="flex gap-4">
            <NavLink to="/cart">
              <Badge
                content={cart.length ? cart.length : 0}
                className="text-sm"
                classNames="bg-blue-200"
                variant="solid"
              >
                <Button
                  isIconOnly
                  color="primary"
                  variant="flat"
                  aria-label="Like"
                >
                  <i class="ri-shopping-cart-fill text-lg"></i>
                </Button>
              </Badge>
            </NavLink>
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
                    <p className="font-bold">@tonyreichert</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">
                    Team Settings
                  </DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
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
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    )}
  </>
  );
}
