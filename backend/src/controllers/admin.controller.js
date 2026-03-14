import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getDashboard = async (req, res) => {

  const users = await prisma.user.count()
  const courses = await prisma.course.count()

  res.json({
    totalUsers: users,
    totalCourses: courses
  })

}

import prisma from "../lib/prisma.js"

export const getAllUsers = async (req, res) => {

  try {

    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true
      }
    })

    res.json(users)

  } catch (error) {

    res.status(500).json({ message: "Server error" })

  }

}

export const deleteUser = async (req, res) => {

  const { id } = req.params

  try {

    await prisma.user.delete({
      where: { id }
    })

    res.json({
      message: "User deleted"
    })

  } catch (error) {

    res.status(500).json({ message: "Server error" })

  }

}

export const updateUserRole = async (req, res) => {

  const { id } = req.params
  const { role } = req.body

  const user = await prisma.user.update({
    where: { id },
    data: { role }
  })

  res.json(user)

}
