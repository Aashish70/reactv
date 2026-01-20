# Yup

- Yup ka use form validation ke liye use hota hai, ise ham with react-hook-form and without react-hook-form ke bhi use kar sakte hai

#### String method -

- string()
- length(limit, message)
- min(limit, message)
- max(limit, message)
- matches(regex, message)
- eamil(message)
- url(message)
- uuid(message)
- datetime(options)
- ensure()
- trim(message)
- lowercase(message)
- uppercase(message)

#### Number method -
- number()
- min(limit, message)
- max(limit, message)
- lessThan(max, message)
- moreThan(min, message)
- positive(message)
- negative(message)
- truncate()
- round(type)


#### Date method -
- date()
- min(limit, message)
- max(limit, message)


#### Array method -
- array()
- array.of(typeSchema)
- array.required(message)
- array.min(limit, message)
- array.max(limit, message)
- array.ensure()array.compact(fn)

#### Object method -
- object()
- object.shape(fields)
- object.json()
- object.concat(otherObjectSchema)
- object.pick(keys)
- object.omit(keys)
- object.from(fromKey, toKey, alias)
- object.exact(message)
- object.stripUnknown()
- object.noUnknown(onlyKnownKeys, message)
- object.camelCase()
- object.constantCase()
