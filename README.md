### This is a example of getting data from 2 endpoints and holding state in both, displayed in tables.

The Stack:
- React
- Redux

What's accomplished:
 - show attributes with it's linked values
 - highlight the selected attribute and the values linked to it
 - values are sorted by rank
 - the UI is optimistic and displays the change before the server response / if error from server undo the change

The endpoints:
 - attributes: http://demo0113689.mockable.io/attribute_values
 - values: http://demo0113689.mockable.io/values
 - patch: http://demo0113689.mockable.io/attribute_values?attribute_id={attributeId}&value_id={valueId}
