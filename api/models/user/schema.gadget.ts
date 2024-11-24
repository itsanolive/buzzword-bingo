import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://buzzword-bingo.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "DataModel-0teqdSYuM-56",
  fields: {
    admin: {
      type: "boolean",
      default: false,
      storageKey: "YtcPV4eOCoO7",
    },
    buzzwordSubmissions: {
      type: "hasMany",
      children: {
        model: "buzzwordSubmission",
        belongsToField: "submittedBy",
      },
      storageKey: "Pibi03f8YKgY",
    },
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey:
        "ModelField-rjggwh_RuGkH::FieldStorageEpoch-I2odKzHfpKFB",
    },
    emailVerificationToken: {
      type: "string",
      storageKey:
        "ModelField-huscGH1MA1et::FieldStorageEpoch-6jjOMNpnDGeV",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey:
        "ModelField-6MP00kznF_Lb::FieldStorageEpoch-aJdsQLi-D1Eq",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey:
        "ModelField-fMZMvZEmdAWs::FieldStorageEpoch-x_5F2oo19BQd",
    },
    firstName: {
      type: "string",
      storageKey:
        "ModelField-1M31fJKh0QR5::FieldStorageEpoch-n2X_kERHIapm",
    },
    googleImageUrl: {
      type: "url",
      storageKey:
        "ModelField-GPpBbtzHAllZ::FieldStorageEpoch-ruYEVm-d2tx7",
    },
    googleProfileId: {
      type: "string",
      storageKey:
        "ModelField-QK9XkEAbmbEB::FieldStorageEpoch-muExKAnqlREK",
    },
    lastName: {
      type: "string",
      storageKey:
        "ModelField-0Z5DpXhLI18w::FieldStorageEpoch-OEKs3s3kCF64",
    },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey:
        "ModelField-z7nhy2Xj6Vwt::FieldStorageEpoch-q8EZlbI7kG3b",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey:
        "ModelField-qorg2n3iIBPk::FieldStorageEpoch-0swT15aYbiXr",
    },
    resetPasswordToken: {
      type: "string",
      storageKey:
        "ModelField-Af4Y5RC-QkvS::FieldStorageEpoch-f1aJmuPo95Gb",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey:
        "ModelField-yWS8fJhtRwQK::FieldStorageEpoch-9pgKX3x444AB",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey:
        "ModelField-C7vHBKcCHYXE::FieldStorageEpoch-Dh5U8VJk8iDw",
    },
  },
};
