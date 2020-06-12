import bcrypt from 'bcryptjs';
import mongoose, { Schema, Document, HookNextFunction } from 'mongoose';

export interface IUser {
	name: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IUserSchema extends IUser, Document {}

const UserSchema: Schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
	},
	{
		timestamps: true,
	}
);

UserSchema.pre<IUserSchema>('save', async function (next: HookNextFunction) {
	const hash = await bcrypt.hash(this.password, 10);

	this.password = hash;

	next();
});

export default mongoose.model<IUserSchema>('User', UserSchema);
