const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)

try {
  importAll(require.context('../../assets/icons', true, /\.svg$/))
} catch (e) {
  // console.log(e)
}
