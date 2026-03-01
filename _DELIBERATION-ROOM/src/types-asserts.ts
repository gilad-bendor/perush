import { z } from 'zod';

// Make sure that a TypeScript type matches exactly to a ZodType.
// Usage:     assertZodTypeMatch<Type, typeof zodType>(true);
export function assertZodTypeMatch<TS_TYPE, ZOD_TYPE extends z.ZodType>(
	_true: _AssertTypesMatch<TS_TYPE, z.infer<ZOD_TYPE>>,
) {}

// Make sure that two TypeScript types match exactly.
// Usage:     assertTypesMatch<TypeA, TypeB>(true);
export function assertTypesMatch<TS_TYPE_A, TS_TYPE_B>(
	_true: _AssertTypesMatch<TS_TYPE_A, TS_TYPE_B>,
) {}

// Make sure that AssignedValueType can be assigned into AssignedToType.
// Usage:     assertTypeAssignableToType<AssignedToType, AssignedValueType>(true);
export function assertTypesAssignable<ASSIGNED_TO_TS_TYPE, ASSIGNED_VALUE_TS_TYPE>(
	_true: _AssertTypesAssignable<ASSIGNED_TO_TS_TYPE, ASSIGNED_VALUE_TS_TYPE>,
) {}

// Can we do "A = B" and "B = A" ?
type _AssertTypesMatch<
	A,
	B,
	EXTRA = [
		'Problematic properties:',
		_ListPropertiesOfObject<
			_ExtractInterestingProperties<{
				[P in keyof A | keyof B]: P extends keyof A
					? P extends keyof B
						? _AssertTypesMatch<A[P], B[P]>
						: never
					: never;
			}>
		>,
	],
> = A & B extends never
	? [A, ' has nothing in common with ', B, EXTRA]
	: A extends B
	? B extends A
		? _MakeUndefinedAndMandatory<A> extends _MakeUndefinedAndMandatory<B>
			? _MakeUndefinedAndMandatory<B> extends _MakeUndefinedAndMandatory<A>
				? true
				: [A, ' has optional property that is not in ', B, EXTRA]
			: [B, ' has optional property that is not in ', A, EXTRA]
		: [B, ' doesnt extend ', A, EXTRA]
	: [A, ' doesnt extend ', B, EXTRA];

// Can we do "A = B" ?
type _AssertTypesAssignable<
	A,
	B,
	EXTRA = [
		'Problematic properties:',
		_ListPropertiesOfObject<
			_ExtractInterestingProperties<{
				[P in keyof A]: P extends keyof B ? _AssertTypesAssignable<A[P], B[P]> : never;
			}>
		>,
	],
> = A & B extends never
	? [A, ' has nothing in common with ', B, EXTRA]
	: B extends A
	? _MakeUndefinedAndMandatory<B> extends _MakeUndefinedAndMandatory<A>
		? true
		: [A, ' has optional property that is not in ', B, EXTRA]
	: [B, ' is not assignable into ', A, EXTRA];

type _MakeMandatory<T> = {
	[P in keyof T]-?: T[P];
};
type _AddUndefined<T> = {
	[P in keyof T]: T[P] | undefined;
};
type _MakeUndefinedAndMandatory<T> = _AddUndefined<_MakeMandatory<T>>;

type _ExtractInterestingKeys<T> = {
	[K in keyof T]: T[K] extends ArrayLike<any> ? K : never;
}[keyof T];
type _ExtractInterestingProperties<T> = Pick<T, _ExtractInterestingKeys<T>>;

type _ListPropertiesOfObject<T, P extends keyof T = keyof T> = P extends
	| string
	| number
	| bigint
	| boolean
	| null
	| undefined
	? ` ${P} `
	: `...symbol...`;
