import {getRequestedPerson} from "../services/getRequestedPerson";

export function titleSearch(parent, args, context, _info){
    const searchRequest = args.searchRequest
    const person = getRequestedPerson(context.context, args)

    const titleSearchService = context.context.titleSearchService;
    return titleSearchService.find(person, searchRequest)
}