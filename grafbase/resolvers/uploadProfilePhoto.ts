import { hankoIdFromToken } from "../lib/hanko-validate"
// import sst from "sst"

export default async function uploadProfilePhotoResolver(
  root: any,
  args: { imageInBase64: string },
  context: any,
) {
  const hankoId = await hankoIdFromToken(context)
  if (hankoId) {
    // TODO: use SST to upload a passed in image to S3
    // get URL, then save the URL to the user object
    // probably image coming in is encoded in base 64, not sure
  }
}
