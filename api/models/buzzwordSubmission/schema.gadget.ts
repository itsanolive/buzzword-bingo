import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "buzzwordSubmission" model, go to https://buzzword-bingo.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "03I447kb_GAs",
  fields: {
    approved: {
      type: "boolean",
      default: false,
      storageKey: "8ylHCH4zXZ2t",
    },
    group: {
      type: "belongsTo",
      parent: { model: "buzzwordGroup" },
      storageKey: "Lw3YUJ9LH7sr",
    },
    public: {
      type: "boolean",
      default: true,
      storageKey: "Eo5P33CPrvRU",
    },
    submittedBy: {
      type: "belongsTo",
      parent: { model: "user" },
      storageKey: "HzTpwKPIoZzz",
    },
    value: {
      type: "string",
      validations: { required: true },
      storageKey: "LvXZl_VwhyBP",
    },
  },
};
