
const data = `type Query {
  me: User
  properties(type: CostType!, state: String!, budget: Float): PropertyPage!
  property(slug: String!): Property
  featuredProperties: PropertyPage!
}

type Mutation {
  createProperty(input: CreatePropertyInput!): ID!
  deleteProperty(id: ID!): Boolean!
  incrementPropertyView(input: PropertyViewInput!): Boolean!
  updateUser(input: UserInput!): User!
  assignBounty(input: BountyInput!): Property!
}

type User {
  id: ID!
  email: String!
  phone: String
  name: String!
  type: UserType!
  properties: [Property!]
}

input UserInput {
  type: UserType
}

type Property {
  id: String!
  bounty: Float
  expense: Float
  remainingExpense: Float
  title: String!
  visits: Int!
  state: String
  costValue: Int!
  costType: CostType!
  owner: User!
  images: [Image!]
  description: String
  featured: Boolean
  slug: String!
}

type Image {
  url: String!
  previewUrl: String!
}

input ImageInput {
  url: String!
  previewUrl: String!
}

enum CostType {
  Rent
  Sale
}

enum UserType {
  Agency
  Individual
  Unassigned
}

type Location {
  state: String!
}

input LocationInput {
  state: String!
}

type Cost {
  value: Int!
  costType: CostType!
}

type PropertyPoint {
  propertyId: String!
  propertyTitle: String!
  points: Int!
  profit: Float!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
}

type PropertyPage {
  properties: [Property!]
  pageInfo: PageInfo!
}

input BountyInput {
  propertyId: ID!
  expense: Float!
  bounty: Float!
}

input PropertyViewInput {
  referrerId: ID
  propertyId: ID!
}

input CreatePropertyInput {
  title: String!
  location: LocationInput!
  costValue: Int!
  costType: CostType!
  featured: Boolean!
  images: [ImageInput!]!
  description: String!
}
`
export default data
