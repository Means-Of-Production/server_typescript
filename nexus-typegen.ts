/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  LocationTypeEnum: "Distributed" | "Physical" | "Virtual"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Area: { // root type
    center: NexusGenRootTypes['PhysicalLocation']; // PhysicalLocation!
    distance: number; // Float!
  }
  DistributedLibrary: { // root type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
  Email: { // root type
    value: string; // String!
  }
  Lender: { // root type
    id: string; // String!
  }
  Person: { // root type
    emails: NexusGenRootTypes['Email'][]; // [Email!]!
    id: string; // String!
    name: NexusGenRootTypes['PersonName']; // PersonName!
  }
  PersonName: { // root type
    firstName: string; // String!
    lastName: string; // String!
    middleName?: string | null; // String
  }
  PhysicalLocation: { // root type
    apartment?: string | null; // String
    city?: string | null; // String
    country?: string | null; // String
    latitude?: string | null; // String
    longitude?: string | null; // String
    state?: string | null; // String
    streetAddress?: string | null; // String
    streetName?: string | null; // String
    zipcode?: string | null; // String
  }
  Query: {};
  SimpleLibrary: { // root type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
  Thing: { // root type
    id: string; // String!
    imageUrls: string[]; // [String!]!
    owner: NexusGenRootTypes['Lender']; // Lender!
    storageLocation: NexusGenRootTypes['Location']; // Location!
    title: NexusGenRootTypes['ThingTitle']; // ThingTitle!
  }
  ThingTitle: { // root type
    description?: string | null; // String
    isbn?: string | null; // String
    name: string; // String!
    upc?: string | null; // String
  }
  VirtualLocation: { // root type
    url?: string | null; // String
  }
}

export interface NexusGenInterfaces {
  Library: NexusGenRootTypes['DistributedLibrary'] | NexusGenRootTypes['SimpleLibrary'];
}

export interface NexusGenUnions {
  Location: NexusGenRootTypes['Area'] | NexusGenRootTypes['PhysicalLocation'];
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects & NexusGenUnions

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Area: { // field return type
    center: NexusGenRootTypes['PhysicalLocation']; // PhysicalLocation!
    distance: number; // Float!
  }
  DistributedLibrary: { // field return type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    items: Array<NexusGenRootTypes['Thing'] | null>; // [Thing]!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
  Email: { // field return type
    value: string; // String!
  }
  Lender: { // field return type
    id: string; // String!
  }
  Person: { // field return type
    emails: NexusGenRootTypes['Email'][]; // [Email!]!
    id: string; // String!
    name: NexusGenRootTypes['PersonName']; // PersonName!
  }
  PersonName: { // field return type
    firstName: string; // String!
    lastName: string; // String!
    middleName: string | null; // String
  }
  PhysicalLocation: { // field return type
    apartment: string | null; // String
    city: string | null; // String
    country: string | null; // String
    latitude: string | null; // String
    longitude: string | null; // String
    state: string | null; // String
    streetAddress: string | null; // String
    streetName: string | null; // String
    zipcode: string | null; // String
  }
  Query: { // field return type
    libraries: NexusGenRootTypes['Library'][]; // [Library!]!
  }
  SimpleLibrary: { // field return type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    items: Array<NexusGenRootTypes['Thing'] | null>; // [Thing]!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
  Thing: { // field return type
    id: string; // String!
    imageUrls: string[]; // [String!]!
    owner: NexusGenRootTypes['Lender']; // Lender!
    storageLocation: NexusGenRootTypes['Location']; // Location!
    title: NexusGenRootTypes['ThingTitle']; // ThingTitle!
  }
  ThingTitle: { // field return type
    description: string | null; // String
    isbn: string | null; // String
    name: string; // String!
    upc: string | null; // String
  }
  VirtualLocation: { // field return type
    url: string | null; // String
  }
  Library: { // field return type
    administrator: NexusGenRootTypes['Person']; // Person!
    id: string; // String!
    items: Array<NexusGenRootTypes['Thing'] | null>; // [Thing]!
    location: NexusGenRootTypes['Location']; // Location!
    name: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Area: { // field return type name
    center: 'PhysicalLocation'
    distance: 'Float'
  }
  DistributedLibrary: { // field return type name
    administrator: 'Person'
    id: 'String'
    items: 'Thing'
    location: 'Location'
    name: 'String'
  }
  Email: { // field return type name
    value: 'String'
  }
  Lender: { // field return type name
    id: 'String'
  }
  Person: { // field return type name
    emails: 'Email'
    id: 'String'
    name: 'PersonName'
  }
  PersonName: { // field return type name
    firstName: 'String'
    lastName: 'String'
    middleName: 'String'
  }
  PhysicalLocation: { // field return type name
    apartment: 'String'
    city: 'String'
    country: 'String'
    latitude: 'String'
    longitude: 'String'
    state: 'String'
    streetAddress: 'String'
    streetName: 'String'
    zipcode: 'String'
  }
  Query: { // field return type name
    libraries: 'Library'
  }
  SimpleLibrary: { // field return type name
    administrator: 'Person'
    id: 'String'
    items: 'Thing'
    location: 'Location'
    name: 'String'
  }
  Thing: { // field return type name
    id: 'String'
    imageUrls: 'String'
    owner: 'Lender'
    storageLocation: 'Location'
    title: 'ThingTitle'
  }
  ThingTitle: { // field return type name
    description: 'String'
    isbn: 'String'
    name: 'String'
    upc: 'String'
  }
  VirtualLocation: { // field return type name
    url: 'String'
  }
  Library: { // field return type name
    administrator: 'Person'
    id: 'String'
    items: 'Thing'
    location: 'Location'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
}

export interface NexusGenAbstractTypeMembers {
  Location: "Area" | "PhysicalLocation"
  Library: "DistributedLibrary" | "SimpleLibrary"
}

export interface NexusGenTypeInterfaces {
  DistributedLibrary: "Library"
  SimpleLibrary: "Library"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "Library" | "Location";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}