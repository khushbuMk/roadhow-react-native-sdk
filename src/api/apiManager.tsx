const devUrl = 'https://dev.roadhow.co.uk';
const prodUrl = 'https://www.roadhow.co.uk';
const api = '/api/V1/'
const baseURL = `${devUrl}${api}`

export const bundleIdentifier = "com.RoadHow.SDK.RoadHow"
export const DeviceType = "IOS" ; // "Mobile"

export function generateAPIUrl(apiName: string): string {
    return `${baseURL}${apiName}`
}