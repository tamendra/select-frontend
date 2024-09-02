import { ObjectGeneric } from "../types/generic"

const translation: ObjectGeneric<string> = {
  TXT_APP_NAME: 'Select',
  TXT_FEATURED_WEBSITES: 'Featured Websites',
  TXT_EXPLORE: 'Explore',
  READ_MORE: '...Read More'
}

export const getTranslation = (identifier: string) => {
  return translation[identifier] ?? identifier
}