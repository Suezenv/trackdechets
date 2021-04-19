import { checkIsAuthenticated } from "../../../common/permissions";
import getReadableId, { ReadableIdPrefix } from "../../../forms/readableId";
import {
  BsvhuInput,
  MutationCreateBsvhuArgs
} from "../../../generated/graphql/types";
import prisma from "../../../prisma";
import { GraphQLContext } from "../../../types";
import { expandVhuFormFromDb, flattenVhuInput } from "../../converter";
import { checkIsFormContributor } from "../../permissions";
import { validateBsvhuForm } from "../../validation";

type CreateBsvhu = {
  isDraft: boolean;
  input: BsvhuInput;
  context: GraphQLContext;
};

export default async function create(
  _,
  { input }: MutationCreateBsvhuArgs,
  context: GraphQLContext
) {
  return genericCreate({ isDraft: false, input, context });
}

export async function genericCreate({ isDraft, input, context }: CreateBsvhu) {
  const user = checkIsAuthenticated(context);

  const form = flattenVhuInput(input);
  await checkIsFormContributor(
    user,
    form,
    "Vous ne pouvez pas créer un bordereau sur lequel votre entreprise n'apparait pas"
  );

  await validateBsvhuForm(form, { emissionSignature: !isDraft });

  const newForm = await prisma.bsvhuForm.create({
    data: { ...form, id: getReadableId(ReadableIdPrefix.VHU), isDraft }
  });

  // TODO Status log ?
  // TODO emit event ?

  return expandVhuFormFromDb(newForm);
}
