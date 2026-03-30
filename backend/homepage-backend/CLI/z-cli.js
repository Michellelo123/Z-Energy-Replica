#!/usr/bin/env node 
import mongoose from "mongoose"
import {Command} from "commander"
import inquirer from "inquirer"
import connectDB from "../mongooseDB.js"
import {Home} from "../homeSchema.js"
import { seedData, listZData } from "./command.js"

const program= new Command()
program
    .name("Z-CLI")
    .description("CLI tool to seed data")
    .version("1.0.0")

program
    .command("seed")
    .description("seed data")
    .action(seedData)
program
    .command("list")
    .description("showing Z data for home page rendering")
    .action(listZData)
program
  .command ("delete-all")
  .description("deleting seed data")
  .action(async()=>{
    try{
        await connectDB()
        const answer = await inquirer.prompt([
        {
            type:"confirm",
            name: "confirmDeleteAll",
            message: "Are you sure you want to delete ALL data?",
            default: false
        }
    ])
    if(!answer.confirmDeleteAll){
        console.log("Cancelling operation")
        return
    }

    await Home.deleteMany()
        console.log(`Successfully deleted all data`)
    }catch(err){
        console.error("Error occurred in attempt to delete all seed data", err)

    }finally{
        mongoose.connection.close()
    }
})
program.parse()
