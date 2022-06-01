import { Request,Response } from 'express'
import CreateCourseServise from './CreateCourseServise'

export function createCourse(request: Request,response: Response){
    CreateCourseServise.execute({
        educator:"Dani",
        name: "NodeJs",
        duration: 10
    });

    CreateCourseServise.execute({
        educator:"Diego",
        name: "ReactJs"
    });

    return response.send();
}



