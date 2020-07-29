
const data = `type Query {
  me: User
  postedProperties(input: PaginationInput): PropertyPage!
  sharedProperties(input: PaginationInput): PropertyPointPage!
  properties(input: PropertiesInput!): PropertyPage!
  property(slug: String!): Property
  featuredProperties: PropertyPage!
  getPaymentLink(input: PaymentInput!): String!
  meta: Meta!
}

type Mutation {
  createProperty(input: CreatePropertyInput!): ID!
  deleteProperty(id: ID!): Boolean!
  incrementPropertyView(input: PropertyViewInput!): Boolean
  updateUser(input: UserInput!): Boolean!
  assignBounty(input: BountyInput!): Boolean!
}

type User {
  id: ID!
  email: String!
  phone: String
  name: String!
  type: UserType!
  balance: Float!
}

type Owner {
  phone: String!
  name: String!
}

input UserInput {
  type: UserType
  name: String
  phone: String
}

type Property {
  id: String!
  bounty: Float
  expense: Float
  remainingExpense: Float
  title: String!
  city: String
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
  city: String!
  state: String!
}

input LocationInput {
  city: String!
  state: String!
}

type PropertyPoint {
  propertySlug: String!
  propertyTitle: String!
  impressions: Int!
  profit: Float!
}

type PageInfo {
  after: String
  before: String
}

type PropertyPointPage {
  points: [PropertyPoint!]
  pageInfo: PageInfo!
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

input PropertiesInput {
  type: CostType!
  state: String!
  budget: Float
  cursor: String
}

input PaginationInput {
  cursor: String
}

input PaymentInput {
  amount: Float!
}

type Bank {
  name: String!
  code: String!
}

type Meta {
  banks: [Bank!]
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
