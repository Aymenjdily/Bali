"use client";

import { Flex, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter()
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn('credentials', {
        ...data,
        redirect: false
    })
    router.push("/dashboard")
  }

  return (
    <Flex className="min-h-screen" align={"center"} justify={"center"} px="5">
        <form onSubmit={handleLogin}>
            <Flex
                direction={"column"}
                gap="6"
                className="bg-white rounded-2xl border"
                p="6"
            >
                <h1 className="font-bold text-xl text-center">Admin</h1>
                <Flex direction={"column"} gap="4">
                <TextField.Root size="3" className="md:w-[400px]">
                    <TextField.Input value={data.email} placeholder="John@gmail.com" type="email" onChange={(e) => {
                        setData({...data, email: e.target.value})
                    }}/>
                </TextField.Root>
                <TextField.Root size="3">
                    <TextField.Input value={data.password} placeholder="Password" type="password" onChange={(e) => {
                        setData({...data, password: e.target.value})
                    }} />
                </TextField.Root>
                <button type="submit" className="btn text-white">Login</button>
                </Flex>
            </Flex>
        </form>
    </Flex>
  );
};

export default LoginPage;
