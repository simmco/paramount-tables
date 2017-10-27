import { createSelector } from 'reselect';

const getAttributesState = state => state.attributesState;
const getValuesState = state => state.valuesState;

export const getValuesForSelectedAttribute = createSelector(
    [getAttributesState, getValuesState],
    (attributesState, allValues) => {
        const valuesWithSelection = [];
        const selectedAttribute = attributesState.attributes.find(
            attribute => attribute.id === attributesState.selectedAttributeId
        );
        // Create list of values with additional 'selected' attribute
        // value.selected is true if added to the current selected attribute
        allValues.forEach(value => {
            const valueWithSelection = { ...value, selected: false };
            if (selectedAttribute) {
                const valueAssignedToAttribute = selectedAttribute.values.find(attrValue => attrValue.id === value.id);
                valueWithSelection.selected = !!valueAssignedToAttribute;
            }
            valuesWithSelection.push(valueWithSelection);
        });
        return valuesWithSelection;
    }
);
