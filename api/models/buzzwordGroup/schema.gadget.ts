import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "buzzwordGroup" model, go to https://buzzword-bingo.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "6RlJ7E77-TkB",
  fields: {
    buzzwords: {
      type: "hasMany",
      children: {
        model: "buzzwordSubmission",
        belongsToField: "group",
      },
      storageKey: "vzX9xDRWgTgt",
    },
    name: {
      type: "string",
      validations: { required: true },
      storageKey: "qg4KAwHJyV-n",
    },
  },
};
