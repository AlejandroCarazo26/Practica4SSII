import {gql} from "apollo-server"

export const typeDefs = gql`

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        createdAt: String!
    }

    type Projects {
        _id: ID
        name: String!
        description: String
        startDate: String!
        endDate: String!
        owner: ID!
        members: [User!]
        tasks: [Task]
    }


    type Task {
        _id: ID
        title: String!
        projectId: ID!
        assignedTo: ID
        status: String!
        priority: String!
        dueDate: String!
    }

    type AuthPayload {
        token: String!
    }

    type Query {
        me: User
        myProjects: [Projects!]!
        projectDetails(projectId: ID!) : [Projects!]
        users: [User!]

    }

    type Mutation {

        createProject(name: String!, description: String, startDate: String!, endDate: String!, members: [ID]): Projects!
        register(email: String!, password: String!, username: String!): AuthPayload!
        login(email: String!, password: String!): AuthPayload!
        updateProject(id: ID!,name:String, startDate:String, endDate:String, description: String, members: [ID]): Projects
        addMember(projectId:ID!, userId: ID!): Projects
        createTask(projectId: ID!, assignedTo:ID, title:String!, status:String, priority: String!, dueDate:String!): Task!
        updateTaskStatus(taskId: ID!, taskStatus: String!): Task
        deleteProject(id: ID!): Projects

    }
`;