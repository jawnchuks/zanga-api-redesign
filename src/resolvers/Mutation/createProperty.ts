import { MutationResolvers } from '../../../generated/graphqlgen';
import { AuthenticationError } from 'apollo-server-core';
import { CostType } from '../../../generated/sdk';
import generateSlug from '../../functions/generateSlug';

const createProperty: MutationResolvers.CreatePropertyResolver = async (_, { input }, ctx) => {

    if (!ctx.userEmail) {
        throw new AuthenticationError('Token Not Passed')
    }
    const { description, images, location: { state }, title, costType, costValue, featured } = input


    const owner = (await ctx.client.findUserByEmail({ email: ctx.userEmail })).findUserByEmail
    if (!owner) throw new Error('Failed to get owner')

    const result = await ctx.client.createProperty({
        property: {
            costType: CostType[costType],
            costValue,
            description,
            images,
            // city,
            visits: 0,
            bounty: 0,
            city: '',
            remainingExpense: 0,
            slug: generateSlug(title),
            state,
            featured,
            title,
            // pointCount: 1,
            owner: {
                connect: owner.dbId
            }
        }
    })

    return result.createProperty.id

}

export default createProperty