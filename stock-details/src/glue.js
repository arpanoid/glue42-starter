export const registerSetStockDetailsMethod = (setStockDetails) => (glue) => {
    // Register an Interop method by providing a name and a handler.
    glue.interop.register('g42.eas.setStockDetails', setStockDetails);
};
