const { Schema, model } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
            get: createdAtVal => moment(createdAtVal).startOf('day').fromNow()
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            }
        ]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

ReactionSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;