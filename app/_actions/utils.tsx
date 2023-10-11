type NestedObject = {
    [key: string]: NestedObject
};

// create nested object
// data['product_name']['uom_name'] = '?'
export function createNestedObject( base: NestedObject, names: string[], value: {[key: string]: any}) {
    // If a value is given, remove the last name and keep it for later:
    let lastName = arguments.length === 3 ? names.pop() : false;

    // Walk the hierarchy, creating new objects where needed.
    // If the lastName was removed, then the last object is not set yet:
    for( let i = 0; i < names.length; i++ ) {
        base = base[ names[i] ] = base[ names[i] ] || {};
    }

    // If a value was given, set it to the last name:
    if( lastName ) base = base[ lastName ] = value;

    // Return the last object in the hierarchy:
    return base;

};

// access nested object
// string = data['product_name']['uom_name']
export function accessNestedObject( base: NestedObject, names: string[]) {

    // Walk the hierarchy
    for( let i = 0; i < names.length; i++ ) {
        base = base[ names[i] ] = base[ names[i] ] || {};
    }

    // Return the last object in the hierarchy:
    return base;

};

// getErrorMessage with unknown type
export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if (error instanceof Error) {
        message = error.message;
    }
    else if (error && typeof error === "object" && "message" in error && typeof error.message === "string") {
        message = error.message;
    }
    else if (typeof error === "string") {
        message = error;
    }
    else {
        message = "Something went wrong !"
    }

    return message;

};