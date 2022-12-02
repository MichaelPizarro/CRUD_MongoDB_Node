const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
       type: String,
       required: true,
       unique: true,
       trim: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
  },
  {
    timestamps: false,
    versionKey: false
  }
);

module.exports = model("Task", taskSchema);
