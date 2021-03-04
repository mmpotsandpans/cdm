export const importAllImagesInDir = (dir: string) => {
    const requireContext = require.context(dir, true, /\.(png|jpe?g|svg)$/)
    return requireContext.keys().map(requireContext)
}