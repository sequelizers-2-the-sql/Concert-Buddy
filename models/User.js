// Isaac adding this for passport

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const UserSchema = new Schema({
    firstName: {
        type: String,
        // allowNull: false,
        allowNull: true,
        defaultValue: "fakeFirstName"
      },
      lastName: {
        type: String,
        // allowNull: false,
        allowNull: true,
        defaultValue: "fakeLastName"
      },
      email: {
        type: String,
        // allowNull: false,
        allowNull: true,
        unique: true
        // validate: {
        //   isEmail: true
        // }
      },
      // The password cannot be null
      password: {
        type: String,
        allowNull: false
      },
      zipcode: {
        type: String,
        // allowNull: false
        allowNull: true,
      }
});

UserSchema.pre('save', function (next) {
    const user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);