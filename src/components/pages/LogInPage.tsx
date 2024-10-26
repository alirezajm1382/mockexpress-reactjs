import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";
import { motion } from "framer-motion";

const LogInPage: FC = () => {
  return (
    <div>
      <div className=" absolute top-2 left-2">
        <Link to="/">
          <Button variant="outline" size="icon">
            <HomeIcon />
          </Button>
        </Link>
      </div>
      <div className="grid place-items-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>MockExpress</CardTitle>
              <CardDescription>
                Log In to your account using your email and password
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 mt-4">
              <Button className="w-full">Log In</Button>
              <p className="text-sm text-muted-foreground text-right mt-5">
                Don't have an account?{" "}
                <Link to="/sign-up" className="underline hover:text-primary">
                  Sign Up
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default LogInPage;
