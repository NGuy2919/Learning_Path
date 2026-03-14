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


export const getAllUsers = async (req, res) => {

  const users = await prisma.user.findMany()

  res.json(users)

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


export const deleteUser = async (req, res) => {

  const { id } = req.params

  await prisma.user.delete({
    where: { id }
  })

  res.json({ message: "User deleted" })

}